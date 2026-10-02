import type { Instructor, LearningFormat } from "@/types/courses";

export type PlannerItemType =
  | "course"
  | "study"
  | "assignment"
  | "exam"
  | "reminder";

export type PlannerItem = {
  id: string;
  type: PlannerItemType;

  title: string;

  date: string;
  startTime: string;
  endTime: string;

  courseId?: number;

  instructor?: Instructor;
  learningFormat?: LearningFormat;
  location?: string;
};