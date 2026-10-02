"use client";

import {usePlanner} from "@/hooks/usePlanner";
import {Box, Container, Typography} from "@mui/material";

import StudyCalendar from "@/features/planner/components/StudyCalendar/StudyCalendar";

export default function PlannerPage() {
  const { plannerItems, isLoading, error, createPlanner } = usePlanner();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
     <Box sx={{ minHeight: "100vh", bgcolor: "#020817", color: "#f8fafc", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">

            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h3"
                    sx={{
                    fontWeight: 800,
                    color: "#f8fafc",
                    mb: 1,
                    }}
                >
                    My Planner
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                    color: "#94a3b8",
                    }}
                >
                    Plan your study sessions and keep track of your learning progress with our interactive calendar.
                </Typography>
            </Box>
            <StudyCalendar plannerItems={plannerItems} onAddPlanner={createPlanner} />
        </Container>
    </Box>
  );
}   