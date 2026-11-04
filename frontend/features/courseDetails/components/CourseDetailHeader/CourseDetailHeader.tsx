import { Box, Chip, Stack, Typography } from "@mui/material";
import type { Course } from "@/types/courses";

type Props = {
  course: Course;
};

export default function CourseDetailHeader({ course }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 0.5,
        backgroundImage: `url(${course.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(2, 8, 23, 0.78)" }} />

      <Box sx={{ position: "relative", px: { xs: 3, md: 5 }, py: { xs: 6, md: 8 } }}>
        <Stack direction="row" spacing={1.5} sx={{ mb: 2, flexWrap: "wrap" }}>
          <Chip label={course.category} sx={{ bgcolor: "rgba(96, 165, 250, 0.15)", color: "#93c5fd", fontWeight: 700 }} />
          <Chip label={course.level} sx={{ bgcolor: "rgba(148, 163, 184, 0.2)", color: "#e2e8f0", fontWeight: 700 }} />
        </Stack>

        <Typography variant="h3" sx={{ maxWidth: 800, fontWeight: 800, letterSpacing: -0.8 }}>
          {course.title}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760, lineHeight: 1.8 }}>
          {course.description}
        </Typography>
      </Box>
    </Box>
  );
}
