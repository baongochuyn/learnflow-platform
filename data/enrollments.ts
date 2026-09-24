import type { Enrollment } from "@/types/enrollments";

export const enrollments: Enrollment[] = [
     {
    id: 1,
    userId: 1,
    courseId: 1,
    enrolledAt: "2026-09-01T09:00:00Z",
    status: "active",
  },
  {
    id: 2,
    userId: 1,
    courseId: 2,
    enrolledAt: "2026-08-15T10:30:00Z",
    status: "active",
  },
  {
    id: 3,
    userId: 1,
    courseId: 3,
    enrolledAt: "2026-07-10T14:00:00Z",
    status: "active",
  },
  {
    id: 4,
    userId: 1,
    courseId: 4,
    enrolledAt: "2026-08-20T08:30:00Z",
    status: "cancelled",
  },
];