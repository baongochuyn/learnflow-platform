export type TaskColumn = {
    id: string;
    userId: number;
    name: string;
    position: number;
};

export type TaskLabel = {
    id: string;
    name: string;
    color: string;
};

export type Task = {
    id: string;
    userId: number;
    columnId: string;

    title: string;
    description?: string;

    completed: boolean;
    position: number;

    labels?: TaskLabel[];
    dueDateTime?: string;
};