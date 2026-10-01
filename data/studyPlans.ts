import type { StudyPlan } from "@/types/studyPlan";

export const studyPlans: StudyPlan[] = [
  {
    id: 1,
    userId: 1,
    title: "Review TypeScript",
    date: "2026-09-28",
    startTime: "14:30",
    endTime: "15:00",
  },
  {
    id: 2,
    userId: 1,
    title: "Practice React",
    date: "2026-09-29",
    startTime: "19:00",
    endTime: "20:00",
    courseId: 1,
  },
  {
    id: 3,
    userId: 1,
    title: "English Reading",
    date: "2026-09-28",
    startTime: "08:00",
    endTime: "09:00",
    }
];