import type { TaskColumn, Task } from "../types/task";
import { taskColumns } from "../data/taskColumns";
import { tasks } from "../data/tasks";

export function getTaskColumnsByUserId(userId: number): TaskColumn[] {
    return taskColumns.filter((column) => column.userId === userId);
}
export function getTaskByUserId(userId: number): Task[] {
    return tasks.filter((task) => task.userId === userId);
}

export function createTaskColumn(userId: number, name: string): TaskColumn {
    const newColumn: TaskColumn = {
        id: `column-${taskColumns.length + 1}`,
        userId,
        name,
        position: taskColumns.length,
    };
    taskColumns.push(newColumn);
    return newColumn;
}

export function updateTaskColumn(columnId: string, updatedData: Partial<Omit<TaskColumn, "id" | "userId">>): TaskColumn {
    const columnIndex = taskColumns.findIndex((column) => column.id === columnId);
    if (columnIndex === -1) {
        throw new Error("Task column not found");
    }
    taskColumns[columnIndex] = {
        ...taskColumns[columnIndex],
        ...updatedData,
    };
    return taskColumns[columnIndex];
}

export function deleteTaskColumn(columnId: string): void {
    const columnIndex = taskColumns.findIndex((column) => column.id === columnId);
    if (columnIndex === -1) {
        throw new Error("Task column not found");
    }
    taskColumns.splice(columnIndex, 1);
}

export function createTask(userId: number, columnId: string, title: string): Task {
    const newTask: Task = {
        id: `task-${tasks.length + 1}`,
        userId,
        columnId,
        title,
        completed: false,
        position: tasks.filter((task) => task.columnId === columnId).length,
    };
    tasks.push(newTask);
    return newTask;
}

export function updateTask(taskId: string, updatedData: Partial<Omit<Task, "id" | "userId">>): Task {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...updatedData,
    };
    return tasks[taskIndex];
}

export function deleteTask(taskId: string): void {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    tasks.splice(taskIndex, 1);
}