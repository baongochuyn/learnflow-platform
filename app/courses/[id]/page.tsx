import {courses} from "@/data/courses";
import type { Course } from "@/data/courses";
import CourseDetailHeader from "@/features/courseDetails/components/CourseDetailHeader/CourseDetailHeader";
import CourseDetailMainContent from "@/features/courseDetails/components/CourseDetailMainContent/CourseDetailMainContent";
import EnrollmentCard from "@/features/courseDetails/components/EnrollmentCard/EnrollmentCard";

export default async function CourseDetailsPage({ params }: { params: { id: string } }){
    const { id } = await params;
    const idNumber = parseInt(id);
    const course: Course | undefined = courses.find((course: Course) => course.id === idNumber);

    console.log(course);
    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">
            <button className="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                <a href="/courses">Back to Courses</a>
            </button>
            <div  className="mx-auto max-w-7xl">
                {course ? (
                    <div>
                        <CourseDetailHeader course={course} />
                        <CourseDetailMainContent course={course} />
                        <EnrollmentCard course={course} />
                    </div>
                ) : (
                    <p>Course not found.</p>
                )}
            </div>
        </div>
    )
}