"use client";
import { useMemo, useState } from "react";
import { courses as initialCourses } from "@/data/courses";
import type { Course } from "@/types/courses";

export function useCourses() {
  const [courses] = useState<Course[]>(initialCourses);
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 1. Logic lấy 3 khóa học nổi bật (đã tối ưu theo thuật toán)
  const featuredCourses = useMemo(() => {
    return [...courses]
      .filter((c) => c.rating >= 4.0 && c.studentCount > 0)
      .sort((a, b) => {
        const scoreA = a.rating * 0.6 + Math.log10(a.studentCount + 1) * 0.4;
        const scoreB = b.rating * 0.6 + Math.log10(b.studentCount + 1) * 0.4;
        return scoreB - scoreA;
      })
      .slice(0, 3);
  }, [courses]);

//   // 2. Logic lọc khóa học theo Format & Tuỳ chọn tìm kiếm
//   const filteredCourses = useMemo(() => {
//     return courses.filter((course) => {
//       const matchesFormat =
//         selectedFormat === "All" || course.learningFormat === selectedFormat;
//       const matchesSearch =
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase());

//       return matchesFormat && matchesSearch;
//     });
//   }, [courses, selectedFormat, searchQuery]);

  return {
    courses,
    featuredCourses,
    //filteredCourses,
    selectedFormat,
    setSelectedFormat,
    searchQuery,
    setSearchQuery,
  };
}