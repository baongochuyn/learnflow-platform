import { courses } from "@/data/courses";
import { enrollments } from "@/data/enrollments";
import type { MyCourse } from "@/types/myCourses";

export async function getMyCourses(userId: number): Promise<MyCourse[]> {
  const userEnrollments = enrollments.filter(
    (enrollment) =>
      enrollment.userId === userId &&
      enrollment.status === "active"
  );

  return userEnrollments
    .map((enrollment) => {
      const course = courses.find(
        (course) => course.id === enrollment.courseId
      );

      if (!course) {
        return null;
      }

      const myCourse: MyCourse = {
        id: course.id,
        title: course.title,
        instructor: course.instructor,
        level: course.level,
        learningFormat: course.learningFormat,
        status: enrollment.status === "active" ? "in_progress" : "completed",
      };
      if (course.schedule.length > 0) {
        myCourse.nextSession = course.schedule[0];
      }

      if (course.learningFormat === "Offline") {
        myCourse.location = course.location;
      }

      return myCourse;
    })
    .filter((course): course is MyCourse => course !== null);
}