import type { PlannerItem } from "@/types/planner";
import { courses } from "@/data/courses";
import { studyPlans } from "@/data/studyPlans";
import {enrollments} from "@/data/enrollments";

/**
 * Gets all dates between two dates that match a specific day of the week.
 * @param startDate The start date.
 * @param endDate The end date.
 * @param day The day of the week to match.
 * @returns An array of dates that match the criteria. ex: ["2026-09-28", "2026-10-05", "2026-10-12"]
 */
function getDatesForDay(
  startDate: string,
  endDate: string,
  day: string
): string[] {
  const dates: string[] = [];

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  const targetDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(day);

  if (targetDay === -1) {
    return dates;
  }

  const current = new Date(start);

  while (current <= end) {
    if (current.getDay() === targetDay) {
      dates.push(current.toISOString().split("T")[0]);
    }

    current.setDate(current.getDate() + 1);
  }

  return dates;
}

/**
 * Gets all study plan items for a user.
 * @param userId The ID of the user.
 * @returns An array of study plan items.
 */
function getStudyPlanItems(userId: number): PlannerItem[] {
  return studyPlans
    .filter((plan) => plan.userId === userId)
    .map((plan) => {
      const course =
        plan.courseId !== undefined
          ? courses.find((course) => course.id === plan.courseId)
          : undefined;

      return {
        id: `study-${plan.id}`,
        type: "study",
        title: plan.title,
        date: plan.date,
        startTime: plan.startTime,
        endTime: plan.endTime,
        courseId: plan.courseId,
        instructor: course?.instructor,
        learningFormat: course?.learningFormat,
        location: course?.location,
      };
    });
}

/**
 * Gets all course items for a user.
 * @param userId The ID of the user.
 * @returns An array of course items.
 */
function getCourseItems(userId: number): PlannerItem[] {
  return enrollments
    .filter((enrollment) => enrollment.userId === userId)
    .flatMap((enrollment) => {
      const course = courses.find(
        (course) => course.id === enrollment.courseId
      );

      if (!course) return [];

      // For each schedule item in the course, generate planner items for all the dates that match the schedule
      return course.schedule.flatMap((scheduleItem, index) => {
        const dates = getDatesForDay(
          course.startDate,
          course.endDate,
          scheduleItem.day
        );

        return dates.map((date) => ({
          id: `course-${course.id}-${date}-${index}`,
          type: "course",
          title: course.title,
          date,
          startTime: scheduleItem.startTime,
          endTime: scheduleItem.endTime,
          courseId: course.id,
          instructor: course.instructor,
          learningFormat: course.learningFormat,
          location: course.location,
        }));
      });
    });
}

/**
 * Gets all planner items for a user.
 * @param userId The ID of the user.
 * @returns An array of planner items.
 */
export function getPlannerItems(userId: number): PlannerItem[] {
  const studyPlanItems = getStudyPlanItems(userId);
  const courseItems = getCourseItems(userId);

  // Sort items by date and start time
  return [...studyPlanItems, ...courseItems].sort((a, b) => {
    // First, compare by date
    // If dates are the same, compare by start time
    if (a.date === b.date) {
      return a.startTime.localeCompare(b.startTime);
    }

    return a.date.localeCompare(b.date);
  });
}