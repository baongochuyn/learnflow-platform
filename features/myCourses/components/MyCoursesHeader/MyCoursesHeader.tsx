import { Box, Typography } from "@mui/material";

export default function MyCoursesHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#f8fafc",
          mb: 1,
        }}
      >
        My Learning
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#94a3b8",
          maxWidth: 600,
        }}
      >
        Continue your learning journey and keep track of your enrolled courses.
      </Typography>
    </Box>
  );
}