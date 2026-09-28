export type StudyPlan = {
  id: number;
  userId: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  courseId?: number;
};