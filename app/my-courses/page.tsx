"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";

import { useMyCourses } from "@/hooks/useMyCourses";
import MyCoursesHeader from "@/features/myCourses/components/MyCoursesHeader/MyCoursesHeader";
import MyCoursesStats from "@/features/myCourses/components/MyCoursesStats/MyCoursesStats";
import type { MyCourseStatus } from "@/types/myCourses";
import MyCoursesFilters from "@/features/myCourses/components/MyCoursesFilters/MyCoursesFilters";
import MyCourseCard from "@/features/myCourses/components/MyCourseCard/MyCourseCard";

export default function MyCoursesPage() {
  const { courses, isLoading, error } = useMyCourses();
  const [ selectedStatus, setSelectedStatus ] = useState<MyCourseStatus | "">("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  function handleStatusChange(status: MyCourseStatus | "") {
    setSelectedStatus(status);
  }
  console.log("Courses:", courses);
console.log("Selected Status:", selectedStatus);
  const filteredCourses = selectedStatus === "" ? courses : courses.filter(course => course.status === selectedStatus);

  return (

      <Box sx={{ minHeight: "100vh", bgcolor: "#020817", color: "#f8fafc", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <MyCoursesHeader />
          <MyCoursesStats courses={courses} />

          {/* Render the filtered courses */}
          <MyCoursesFilters selectedStatus={selectedStatus} onStatusChange={handleStatusChange} />
          {filteredCourses.length === 0 ? (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <p>No courses found for the selected status.</p>
            </Box>
          ) : (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3, mt: 4 }}>
              {filteredCourses.map((course) => (
                <MyCourseCard key={course.id} course={course} />
              ))}
            </Box>
          )}
        </Container>
      </Box>
  )}