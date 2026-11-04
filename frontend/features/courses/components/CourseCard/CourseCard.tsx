import type { Course } from "@/types/courses";
import { useRouter } from "next/navigation";
import { Box, Button, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import { AccessTime, People, Star } from "@mui/icons-material";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        bgcolor: "rgba(15, 23, 42, 0.9)",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.2)",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={course.imageUrl}
          alt={course.title}
          sx={{ width: "100%", height: 200, objectFit: "cover" }}
        />

        <Chip
          label={course.level}
          size="small"
          sx={{
            position: "absolute",
            left: 12,
            bottom: 12,
            bgcolor: "rgba(15, 23, 42, 0.9)",
            color: "#f8fafc",
            fontWeight: 700,
          }}
        />

        <Chip
          label={`€${course.price}`}
          size="small"
          sx={{
            position: "absolute",
            right: 12,
            bottom: 12,
            bgcolor: "rgba(15, 23, 42, 0.9)",
            color: "#fbbf24",
            fontWeight: 800,
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Typography variant="caption" sx={{ color: "#60a5fa", fontWeight: 700 }}>
          {course.category}
        </Typography>

        <Typography variant="h6" component="h2" sx={{ mt: 1.5, mb: 1, color: "#f8fafc", fontWeight: 700 }}>
          {course.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ color: "#f8fafc", fontWeight: 700 }}>
            {course.instructor.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {course.instructor.jobTitle}
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderColor: "rgba(148, 163, 184, 0.2)" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "text.secondary", fontSize: 13, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Star fontSize="small" sx={{ color: "#fbbf24" }} />
              <span>{course.rating}</span>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <People fontSize="small" />
              <span>{course.studentCount}</span>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTime fontSize="small" />
              <span>
                {course.duration.value}
                {course.duration.unit === "hours" ? "h" : "d"}
              </span>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push(`/courses/${course.id}`)}
            sx={{ minWidth: 90 }}
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
