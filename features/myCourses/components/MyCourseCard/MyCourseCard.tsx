"use client";

import Link from "next/link";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import type { MyCourse } from "@/types/myCourses";

interface MyCourseCardProps {
  course: MyCourse;
}

export default function MyCourseCard({ course }: MyCourseCardProps) {
  const isCompleted = course.status === "completed";

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0.5,
        bgcolor: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          borderColor: "rgba(245, 158, 11, 0.3)",
          transform: "translateY(-3px)",
          boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Box>
        {/* 1. Badges Trạng thái & Định dạng */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 2, alignItems: "center", justifyContent: "space-between" }}
        >
          {isCompleted ? (
            <Chip
              icon={
                <CheckCircleRoundedIcon
                  sx={{ fontSize: "14px !important", color: "#020617 !important" }}
                />
              }
              label="Completed"
              size="small"
              sx={{
                bgcolor: "#4ade80",
                color: "#020617",
                fontWeight: 700,
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          ) : (
            <Chip
              label={course.level || "General"}
              size="small"
              sx={{
                bgcolor: "rgba(245, 158, 11, 0.12)",
                color: "#fbbf24",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                fontWeight: 600,
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          )}

          {course.learningFormat && (
            <Chip
              label={course.learningFormat}
              size="small"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.05)",
                color: "#94a3b8",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.7rem",
                height: 24,
              }}
            />
          )}
        </Stack>

        {/* 2. Tiêu đề khóa học */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: "#f8fafc",
            lineHeight: 1.4,
            mb: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.8em",
          }}
        >
          {course.title}
        </Typography>

        {course.instructor && (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            {/* <Avatar
              src={course.instructor.avatar}
              alt={course.instructor.name}
              sx={{ width: 24, height: 24 }}
            /> */}
            <Typography
              variant="caption"
              sx={{ color: "#94a3b8", fontWeight: 500 }}
            >
              {course.instructor.name}
            </Typography>
          </Stack>
        )}

        {(course.nextSession || course.location) && (
          <Box
            sx={{
              mt: 2,
              p: 1.25,
              borderRadius: 0.5,
              bgcolor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {course.nextSession && (
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", color: "#818cf8" }}
              >
                <CalendarTodayRoundedIcon sx={{ fontSize: 13 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Next: {course.nextSession.startTime || "TBA"}
                </Typography>
              </Stack>
            )}
            {course.location && (
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", color: "#94a3b8", mt: 0.5 }}
              >
                <LocationOnRoundedIcon sx={{ fontSize: 13 }} />
                <Typography variant="caption">{course.location}</Typography>
              </Stack>
            )}
          </Box>
        )}
      </Box>

      <Box sx={{ pt: 2 }}>
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.06)", mb: 2 }} />
        <Button
          component={Link}
          href={`/courses/${course.id}/learn`}
          fullWidth
          variant="contained"
         // startIcon={<PlayCircleFilledRoundedIcon />}
          sx={{
            bgcolor: isCompleted ? "rgba(255, 255, 255, 0.08)" : "#f59e0b",
            color: isCompleted ? "#f8fafc" : "#020617",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "none",
            borderRadius: 2,
            py: 0.9,
            boxShadow: "none",
            "&:hover": {
              bgcolor: isCompleted ? "rgba(255, 255, 255, 0.15)" : "#d97706",
              boxShadow: "none",
            },
          }}
        >
          Details
        </Button>
      </Box>
    </Paper>
  );
}