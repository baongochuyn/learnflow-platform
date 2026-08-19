import type {Course} from "@/data/courses";
import {
  FaStar,
  FaUsers,
  FaClock,
} from "react-icons/fa";


type CourseCardProps = {
    course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-white shadow-lg">
        <div className="relative">
            <img
            src={course.imageUrl}
            alt={course.title}
            className="h-48 w-full object-cover"
            />

        <span className="absolute bottom-3 left-3 rounded-md bg-slate-900/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
        {course.level}
        </span>

        <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/90 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
        €{course.price}
        </span>
    </div>

    <div className="p-5">
        <span className="text-sm font-medium text-blue-400">
        {course.category}
        </span>

        <h2 className="mt-2 text-xl font-semibold text-white">
        {course.title}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
        {course.description}
        </p>

        <div className="mt-4">
        <p className="font-medium text-white">
            {course.instructor.name}
        </p>

        <p className="text-sm text-slate-400">
            {course.instructor.jobTitle}
        </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-4">
            {/* Course stats */}
            <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400" />
                {course.rating}
                </span>

                <span className="flex items-center gap-1.5">
                <FaUsers />
                {course.studentCount}
                </span>

                <span className="flex items-center gap-1.5">
                <FaClock />
                {course.duration.value}
                {course.duration.unit === "hours" ? "h" : "d"}
                </span>
            </div>

            {/* Detail button */}
            <button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
                Details
            </button>
        </div>
    </div>
    </article>
  );
}