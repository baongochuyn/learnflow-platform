"use client";

import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import { courses } from "@/data/courses";
import type { CourseLevel } from "@/types/courses";
import CourseFilters from "@/features/courses/components/CourseFilters/CourseFilters";
import CourseList from "@/features/courses/components/CourseList/CourseList";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | "">("");

  const filteredCourses = courses.filter((course) => {
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "" || course.level === selectedLevel;

    return matchesSearchTerm && matchesLevel;
  });

  const courseCount = filteredCourses.length;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020817", color: "#f8fafc", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Explore courses
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Learn new skills with online and offline courses.
          </Typography>
        </Box>

        <CourseFilters
          search={searchTerm}
          level={selectedLevel}
          onSearchChange={setSearchTerm}
          onLevelChange={setSelectedLevel}
        />

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {courseCount} course{courseCount !== 1 ? "s" : ""} found.
        </Typography>

        <CourseList courses={filteredCourses} />
      </Container>
    </Box>
  );
}
