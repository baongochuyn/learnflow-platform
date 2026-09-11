import {courses} from "@/data/courses";
import type { Course } from "@/types/courses";
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
            <div  className="mx-auto max-w-7xl">

                <a href="/courses" className="mb-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" > ← Back to Courses </a>

                {course ? (
                    <div>
                        <CourseDetailHeader course={course} />
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]"> 
                            <CourseDetailMainContent course={course} /> 
                            
                            <aside className="lg:sticky lg:top-6 lg:self-start"> 
                                <EnrollmentCard course={course} /> 
                            </aside>
                        </div>
                    </div>
                ) : (
                    <p className="text-slate-400">Course not found.</p>
                )}
            </div>
        </div>
    )
}