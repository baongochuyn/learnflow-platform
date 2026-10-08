import type { TaskColumn } from "@/types/task";

export const taskColumns: TaskColumn[] = [
  {
    id: "column-1",
    userId: 1,
    name: "To Do",
    position: 0,
  },
  {
    id: "column-2",
    userId: 1,
    name: "In Progress",
    position: 1,
  },
  {
    id: "column-3",
    userId: 1,
    name: "Done",
    position: 2,
  },
];