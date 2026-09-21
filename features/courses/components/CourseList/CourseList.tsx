import { Box, Typography } from "@mui/material";
import CourseCard from "@/features/courses/components/CourseCard/CourseCard";
import type { Course } from "@/types/courses";

export default function CourseList({ courses }: { courses: Course[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
        gap: 3,
      }}
    >
      {courses.length === 0 ? (
        <Typography sx={{ gridColumn: "1 / -1", textAlign: "center", color: "text.secondary" }}>
          No courses found.
        </Typography>
      ) : (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      )}
    </Box>
  );
}
