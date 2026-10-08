"use client";

import { useEffect, useState } from "react";

import type { Task, TaskColumn } from "@/types/task";
import {
  getTaskColumnsByUserId,
  getTaskByUserId,
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

  return {
    columns,
    tasks,
    loading,
  };
}