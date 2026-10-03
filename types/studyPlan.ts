import type { PlannerItemType } from "@/types/planner";

export type StudyPlan = {
  id: number;
  userId: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  courseId?: number;
  type?: PlannerItemType;
};