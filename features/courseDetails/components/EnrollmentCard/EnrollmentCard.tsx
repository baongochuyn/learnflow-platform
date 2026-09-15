"use client";

import { AccessTime, People, Star, SignalCellular0Bar } from "@mui/icons-material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Button, Paper, Typography } from "@mui/material";
import type { Course } from "@/types/courses";

export default function EnrollmentCard({ course, isEnrolled, onEnroll }: { course: Course; isEnrolled: boolean; onEnroll: () => void }) {

  const handleEnrollClick = () => {
    onEnroll();
  };

  return (
    <Paper
        elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: "#f8fafc" }}>
        €{course.price}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={handleEnrollClick}
        sx={{ mb: 3, py: 1.5, fontWeight: 700 }}
        disabled={isEnrolled}
        startIcon={isEnrolled ? <CheckCircleRoundedIcon /> : null}
      >
        {isEnrolled ? "Enrolled" : "Enroll Now"}
      </Button>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: 1 }}>
          Course Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SignalCellular0Bar fontSize="small" sx={{ color: "#94a3b8" }} />
                <Typography variant="body2" sx={{ color: "#94a3b8" }} >Level</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>{course.level}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTime fontSize="small" sx={{ color: "#94a3b8" }} />
              <Typography variant="body2" sx={{ color: "#94a3b8" }}>Duration</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>
              {course.duration.value} {course.duration.unit === "hours" ? "hours" : "days"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <People fontSize="small" sx={{ color: "#94a3b8" }} />
              <Typography variant="body2" sx={{ color: "#94a3b8" }}>Students</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>{course.studentCount}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Star fontSize="small" sx={{ color: "#fbbf24" }} />
              <Typography variant="body2" sx={{ color: "#94a3b8" }}>Rating</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>{course.rating}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}