import type { Instructor, CourseLevel, LearningFormat, ScheduleItem } from "./courses";

export type MyCourseStatus = "in_progress" | "completed";

export type MyCourse = {
  id: number;
  title: string;
  instructor: Instructor;
  level: CourseLevel;
  learningFormat: LearningFormat;
  nextSession?: ScheduleItem;
  location?: string;
  status: MyCourseStatus;
};