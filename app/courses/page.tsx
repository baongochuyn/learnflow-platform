"use client";
import { useState } from "react";

import {courses} from "@/data/courses";
import type { CourseLevel } from "@/types/courses";

import CourseFilters from "@/features/courses/components/CourseFilters/CourseFilters";
import CourseList from "@/features/courses/components/CourseList/CourseList";


export default function CoursesPage(){
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLevel, setSelectedLevel] = useState<CourseLevel | "">("");

    const filteredCourses = courses.filter((course) => {
        const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = selectedLevel === "" || course.level === selectedLevel;

        return matchesSearchTerm && matchesLevel;
    });

    function handleSearchChange(search: string) {
        setSearchTerm(search);
    }

    function handleLevelChange(level: CourseLevel | "") {
        setSelectedLevel(level);
    }

    const courseCount = filteredCourses.length;

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <header>
                    <h1 className=" text-center text-3xl font-bold text-white">
                        Explore courses
                    </h1>

                    <p className="text-center mt-2 text-slate-400 mb-6">
                        Learn new skills with online and offline courses.
                    </p>
                </header>
            
                <CourseFilters
                    search={searchTerm}
                    level={selectedLevel}
                    onSearchChange={handleSearchChange}
                    onLevelChange={handleLevelChange}
                />

                <p className="mb-4 text-sm text-slate-400">
                    {courseCount} course{courseCount !== 1 ? "s" : ""} found.
                </p>
                <CourseList courses={filteredCourses} />
            </div>
        </div>
    
    );
}