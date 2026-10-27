"use client";

import { useEffect, useState } from "react";

import type { Task, TaskColumn, TaskLabel } from "@/types/task";
import {
  getTaskColumnsByUserId,
  getTaskByUserId,
  createTask,
  updateTask,
  deleteTask as deleteTaskService,
  updateColumnName as updateColumnNameService,
  deleteColumn as deleteColumnService,
  createTaskColumn,
} from "../services/taskService";
import { useAuth } from "@/context/AuthContext";

export function useTasks() {
  const { currentUser } = useAuth();
  const [columns, setColumns] = useState<TaskColumn[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    const loadTasks = async () => {
      setLoading(true);

      try {
        const [columnsData, tasksData] = await Promise.all([
          getTaskColumnsByUserId(currentUser.id),
          getTaskByUserId(currentUser.id),
        ]);

        setColumns(columnsData);
        setTasks(tasksData);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [currentUser]);

  function addTask(data: {
    title: string;
    description?: string;
    dueDate?: string;
    columnId: string;
    labels?: TaskLabel[];
  }) {
    if (!currentUser) {
      return;
    }
    const newTask = createTask(
      currentUser.id,
      data.columnId,
      data.title,
      data.description,
      data.dueDate,
      data.labels
    );
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function modifyTask(updatedTask: Task) {
    const updated = updateTask(updatedTask.id, {
      title: updatedTask.title,
      description: updatedTask.description,
      dueDateTime: updatedTask.dueDateTime,
      completed: updatedTask.completed,
      labels: updatedTask.labels,
      columnId: updatedTask.columnId,
      position: updatedTask.position,
    });
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updated.id ? updated : task))
    );
  }

  function deleteTask(taskId: string) {
    deleteTaskService(taskId);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function updateColumnName(columnId: string, newName: string) {
    if (!currentUser) {
      return;
    }
    updateColumnNameService(columnId, newName);
    setColumns((prevColumns) =>
      prevColumns.map((column) => (column.id === columnId ? { ...column, name: newName } : column))
    );
  }

  function deleteColumn(columnId: string) {
    if (!currentUser) {
      return;
    }
    deleteColumnService(columnId);

    // Delete all tasks in the column
    setTasks((prevTasks) => prevTasks.filter((task) => task.columnId !== columnId));

    // Delete the column
    setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId));
  }

  function addColumn(name: string) {
    if (!currentUser) {
      return;
    }
    const newColumn = createTaskColumn(currentUser.id, name);
    setColumns((prevColumns) => [...prevColumns, newColumn]);
  }
  
  return {
    columns,
    tasks,
    loading,
    addTask,
    modifyTask,
    deleteTask,
    updateColumnName,
    deleteColumn,
    addColumn,
  };
}