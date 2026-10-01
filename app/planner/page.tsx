"use client";

import {usePlanner} from "@/hooks/usePlanner";
import {Box, Container} from "@mui/material";

import StudyCalendar from "@/features/planner/components/StudyCalendar/StudyCalendar";

export default function PlannerPage() {
  const { plannerItems, isLoading, error } = usePlanner();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
     <Box sx={{ minHeight: "100vh", bgcolor: "#020817", color: "#f8fafc", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
            <h1>Study Planner</h1>
            {plannerItems.length !== 0 && (
                <StudyCalendar plannerItems={plannerItems} />
            )}

        </Container>
    </Box>
  );
}   