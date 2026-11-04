import { enrollments } from "@/data/enrollments";
import type { Enrollment } from "@/types/enrollments";

export async function enrollCourse(
  userId: number,
  courseId: number
): Promise<{ success: boolean; message: string; enrollment?: Enrollment }> {

  const existingEnrollment = enrollments.find(
    (enrollment) =>
      enrollment.userId === userId &&
      enrollment.courseId === courseId &&
      enrollment.status === "active"
  );

  if (existingEnrollment) {
    return {
      success: false,
      message: "You are already enrolled in this course.",
    };
  }

  const enrollment: Enrollment = {
    id: enrollments.length + 1,
    userId,
    courseId,
    enrolledAt: new Date().toISOString(),
    status: "active",
  };

  enrollments.push(enrollment);

  return {
    success: true,
    message: "Enrollment successful!",
    enrollment,
  };
}

export function checkEnrollmentStatus(
  userId: number,
  courseId: number
): boolean {
  const enrollment = enrollments.find(
    (enrollment) =>
      enrollment.userId === userId &&
      enrollment.courseId === courseId &&
      enrollment.status === "active"
  );

  return enrollment !== undefined;
}
