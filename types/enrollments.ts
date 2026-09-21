export type EnrollmentStatus = "active" | "completed" | "cancelled";

export type Enrollment = {
  id: number;
  userId: number;
  courseId: number;
  enrolledAt: string;
  status: EnrollmentStatus;
};