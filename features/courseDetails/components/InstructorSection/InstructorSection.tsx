import { Avatar, Box, Typography, Link } from "@mui/material";
import type { Course } from "@/types/courses";

export default function InstructorSection({
  instructor,
}: {
  instructor: Course["instructor"];
}) {
  const initials = instructor.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Instructor
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            bgcolor: "#f59e0b",
            color: "#020617",
            fontWeight: 700,
          }}
        >
          {initials}
        </Avatar>

        <Box>
          <Link
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
            }}
            href="#"
            underline="hover"
          >
            {instructor.name}
          </Link>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            {instructor.jobTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}