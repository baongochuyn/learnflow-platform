import type { Course } from "@/data/courses";
import {
  FaStar,
  FaUsers,
  FaClock,
} from "react-icons/fa";

type props = {
    course : Course;
}

export default function CourseDetailHeader({ course }: props) {
    return (
        <div className="bg-slate-950 px-6 py-10">
            <h1 className="text-3xl font-bold text-white">{course.title}</h1>
            <p className="text-gray-300">{course.description}</p>
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
            <p className="text-gray-300">{course.instructor.name} - {course.instructor.jobTitle}</p>
        </div>
    )
}