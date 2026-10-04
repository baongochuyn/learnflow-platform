"use client";

import { useAuth } from "@/context/AuthContext";
import {usePlanner} from "@/hooks/usePlanner";
import {Box, Container, Typography} from "@mui/material";

import StudyCalendar from "@/features/planner/components/StudyCalendar/StudyCalendar";

export default function PlannerPage() {
    const { currentUser } = useAuth();
    const { plannerItems, isLoading, error, createPlanner, updatePlanner, deletePlanner } = usePlanner();

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
                    Plan your study sessions and keep track of your learning progress.
                </Typography>
                {!currentUser && (
                    <Typography
                        variant="body1"
                        sx={{
                        color: "#f87171",
                        mt: 1,
                        }}
                    >
                        Please log in to access your planner.
                    </Typography>
                )}
            </Box>
            <StudyCalendar plannerItems={plannerItems} 
            onAddPlanner={createPlanner} 
            onUpdatePlanner={updatePlanner}
            onDeletePlanner={deletePlanner} />
        </Container>
    </Box>
  );
}   