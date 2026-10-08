"use client";

import { Box, Container, Typography } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

import TaskBoard from "@/features/tasks/TaskBoard/TaskBoard";
import { useTasks } from "@/hooks/useTasks";

export default function TasksPage() {
    const { currentUser } = useAuth();
    const { columns, tasks, loading } = useTasks();

    // if (!currentUser) {
    //     return <Box sx={{ minHeight: "100vh", bgcolor: "#020817", color: "#f8fafc", py: { xs: 6, md: 8 } }}>
    //             <Typography
    //                     variant="body1"
    //                     sx={{
    //                     color: "#f87171",
    //                     mt: 1,
    //                     }}
    //                 >
    //                     Please log in to access your tasks.
    //             </Typography>
    //     </Box>;
    // }

    if (loading) {
        return <div>Loading...</div>;
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
                    Tasks
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                    color: "#94a3b8",
                    }}
                >
                    Manage your learning tasks and keep track of your progress.
                </Typography>
                {!currentUser && (
                    <Typography
                        variant="body1"
                        sx={{
                        color: "#f87171",
                        mt: 1,
                        }}
                    >
                        Please log in to access your tasks.
                    </Typography>
                )}
                <Container
                    maxWidth="xl"
                    sx={{ py: 4 }}
                    >
                    <TaskBoard
                        columns={columns}
                        tasks={tasks}
                    />
                </Container>
            </Box>
        </Container>
    </Box>
    );
}
