"use client";

import Link from "next/link";
import { Box, Button, Container, Stack, Typography, Chip } from "@mui/material";

import FeatureCard from "./components/FeatureCard/FeatureCard";
import CourseList from "@/features/courses/components/CourseList/CourseList";
import { useCourses } from "@/hooks/useCourses";
import CategorySection from "./components/CategorySection/CategorySection";

export default function Home() {
  const { featuredCourses } = useCourses();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020617", color: "#f8fafc" }}>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 480, md: 580 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Ambient Glows (Đốm sáng Cyberpunk/Vibrant Dark) */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, md: 600 },
            height: { xs: 150, md: 280 },
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 80%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        {/* Tech Grid Pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
            {/* Pill Tag */}
            <Chip
              label="LEARN & PLAN SMARTER"
              size="small"
              sx={{
                bgcolor: "rgba(245, 158, 11, 0.1)",
                color: "#f59e0b",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                fontWeight: 700,
                letterSpacing: 1.2,
                px: 1,
              }}
            />

            {/* Title  Gradient Text */}
            <Typography
              variant="h1"
              sx={{
                maxWidth: 820,
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Learn better. Plan smarter.{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #f59e0b 0%, #fb923c 50%, #fde047 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stay on track.
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 650, color: "#94a3b8", fontSize: { xs: "1rem", md: "1.125rem" } }}>
              Discover courses, manage your schedule, organize your tasks, and make learning more effective.
            </Typography>

            <Box sx={{ pt: 1 }}>
              <Link href="/courses" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 800,
                    boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)",
                    transition: "all 0.2s",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 30px -5px rgba(245, 158, 11, 0.4)",
                    },
                  }}
                >
                  Explore Courses
                </Button>
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
            gap: 3,
            mb: 10,
          }}
        >
          <FeatureCard title="Courses" description="Discover and explore courses that match your learning goals." href="/courses" />
          <FeatureCard title="Schedule" description="Plan and manage your study schedule effectively." href="/schedule" />
          <FeatureCard title="Tasks" description="Organize your learning tasks and keep track of your progress." href="/tasks" />
        </Box>

        <Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mb: 4,
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "flex-end" },
              pb: 2,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Box>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
                Featured Courses
              </Typography>
              <Typography variant="body2" sx={{ color: "#94a3b8", mt: 0.5 }}>
                Start learning from industry experts
              </Typography>
            </Box>

            <Link href="/courses" style={{ textDecoration: "none" }}>
              <Button color="primary" sx={{ fontWeight: 700, "&:hover": { background: "transparent", textDecoration: "underline" } }}>
                View all courses →
              </Button>
            </Link>
          </Stack>

          {/* ===== CATEGORY SECTION ===== */}
          <Box sx={{ mb: 5 }}>
            <CategorySection /> 
          </Box>

          <CourseList courses={featuredCourses} />
        </Box>
      </Container>
    </Box>
  );
}