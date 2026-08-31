import React from "react";
import CourseCard from "@/features/courses/components/CourseCard/CourseCard";
import { courses } from "@/data/courses";


export default function CourseList(){

    return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
    ))}
    </div>)
}