import type { Task } from "@/types/task";

export const tasks: Task[] = [
  {
    id: "task-1",
    userId: 1,
    columnId: "column-1",
    title: "Read React documentation",
    description: "Review the official React docs.",
    completed: false,
    position: 0,
  },
  {
    id: "task-2",
    userId: 1,
    columnId: "column-1",
    title: "Practice useEffect",
    completed: false,
    position: 1,
  },
  {
    id: "task-3",
    userId: 1,
    columnId: "column-2",
    title: "Build TaskBoard",
    completed: false,
    position: 0,
  },
  {
    id: "task-4",
    userId: 1,
    columnId: "column-3",
    title: "Setup MUI",
    completed: true,
    position: 0,
  },
  {
    id: "task-5",
    userId: 1,
    columnId: "column-3",
    title: "Create repository",
    completed: true,
    position: 1,
  },
];