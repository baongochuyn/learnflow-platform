"use client";

import { useEffect, useState } from "react";

import type { Task, TaskColumn, TaskLabel } from "@/types/task";
import {
  getTaskColumnsByUserId,
  getTaskByUserId,
  createTask 
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

  return {
    columns,
    tasks,
    loading,
    addTask,
  };
}