import { Box, Paper, Stack, Typography, Avatar } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import type { MyCourse } from "@/types/myCourses";

export default function MyCoursesStats({ courses }: { courses: MyCourse[] }) {
    const totalCourses = courses.length;
    const completedCourses = courses.filter(course => course.status === "completed").length;
    const inProgressCourses = courses.filter(course => course.status === "in_progress").length;

    const stats = [
        {
            label: "Total Courses",
            value: totalCourses,
            color: "#fbbf24", // Vàng Amber
            bgColor: "rgba(251, 191, 36, 0.12)",
            borderColor: "rgba(251, 191, 36, 0.25)",
            icon: <SchoolRoundedIcon />,
        },
        {
            label: "In Progress",
            value: inProgressCourses,
            color: "#60a5fa", // Xanh Dương
            bgColor: "rgba(96, 165, 250, 0.12)",
            borderColor: "rgba(96, 165, 250, 0.25)",
            icon: <AutoStoriesRoundedIcon />,
        },
        {
            label: "Completed",
            value: completedCourses,
            color: "#4ade80", // Xanh Lá
            bgColor: "rgba(74, 222, 128, 0.12)",
            borderColor: "rgba(74, 222, 128, 0.25)",
            icon: <CheckCircleRoundedIcon />,
        },
    ];

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2.5,
                mb: 4,
            }}
        >
            {stats.map((item, index) => (
                <Paper
                    key={index}
                    elevation={0}
                    sx={{
                        p: 2.5,
                        borderRadius: 0.5,
                        bgcolor: "rgba(15, 23, 42, 0.65)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "all 0.25s ease-in-out",
                        "&:hover": {
                            transform: "translateY(-3px)",
                            borderColor: item.borderColor,
                            boxShadow: `0 10px 25px -10px ${item.bgColor}`,
                        },
                    }}
                >
                    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                        {/* Icon Avatar bọc hiệu ứng nền mềm */}
                        <Avatar
                            sx={{
                                width: 52,
                                height: 52,
                                bgcolor: item.bgColor,
                                color: item.color,
                                borderRadius: 2.5,
                            }}
                        >
                            {item.icon}
                        </Avatar>

                        {/* Chi tiết thông số */}
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: "#f8fafc",
                                    lineHeight: 1.1,
                                    mb: 0.5,
                                }}
                            >
                                {item.value}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#94a3b8",
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>
            ))}
        </Box>
    );
}