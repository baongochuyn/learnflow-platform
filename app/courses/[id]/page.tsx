import Link from "next/link";
import { notFound } from "next/navigation";
import { Box, Button, Container } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";


import { courses } from "@/data/courses";
import type { Course } from "@/types/courses";
import CourseDetailHeader from "@/features/courseDetails/components/CourseDetailHeader/CourseDetailHeader";
import CourseDetailMainContent from "@/features/courseDetails/components/CourseDetailMainContent/CourseDetailMainContent";
import EnrollmentSection from "@/features/courseDetails/components/EnrollmentSection/EnrollmentSection";

export default async function CourseDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const idNumber = parseInt(id);
  const course: Course | undefined = courses.find((course: Course) => course.id === idNumber);

  if (!course) {
    notFound();
  }

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        bgcolor: "#020617", 
        color: "#f8fafc", 
        py: { xs: 4, md: 6 },
        position: "relative"
      }}
    >
      {/* Background Glow Effect*/}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 1200,
          height: 350,
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 80%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Link href="/courses" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            sx={{
              mb: 4,
              color: "#94a3b8",
              fontWeight: 600,
              borderRadius: "9999px",
              px: 2.5,
              py: 1,
              border: "1px solid rgba(255,255,255,0.08)",
              bgcolor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                color: "#f8fafc",
                borderColor: "rgba(245, 158, 11, 0.4)",
                bgcolor: "rgba(30, 41, 59, 0.8)",
                transform: "translateX(-4px)",
              },
            }}
          >
            Back to Courses
          </Button>
        </Link>

        {/* Header */}
        <CourseDetailHeader course={course} />

        {/* Layout Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 380px" },
            gap: { xs: 4, lg: 5 },
            mt: 4,
            alignItems: "start",
          }}
        >
          {/* left column: Main Content */}
          <CourseDetailMainContent course={course} />

          {/* right column: Sticky Card */}
          <Box
            sx={{
              position: { lg: "sticky" },
              top: { lg: 104 },
              zIndex: 10,
              height: "fit-content"
            }}
          >
            <EnrollmentSection course={course}/>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};