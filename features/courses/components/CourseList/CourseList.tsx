import CourseCard from "@/features/courses/components/CourseCard/CourseCard";
import type { Course } from "@/data/courses";

export default function CourseList({ courses }: { courses: Course[] }) {

    return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.length === 0 ? (
            <p className="text-center text-slate-400">No courses found.</p>
        ) : (
            courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))
        )}
    </div>)
}