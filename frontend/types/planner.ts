import type { Instructor, LearningFormat } from "@/types/courses";

export type PlannerItemType =
  | "course"
  | "study"
  | "assignment"
  | "exam"
  | "reminder";

export type PlannerItem = {
  id: number;
  type: PlannerItemType;
  userId: number;
  title: string;

  date: string;
  startTime: string;
  endTime: string;

  courseId?: number;

  instructor?: Instructor;
  learningFormat?: LearningFormat;
  location?: string;
};