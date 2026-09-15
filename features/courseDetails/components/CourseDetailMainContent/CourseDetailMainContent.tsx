import { Box, Typography } from "@mui/material";
import type { Course } from "@/types/courses";

export default function CourseDetailMainContent({ course }: { course: Course }) {
  return (
    <Box sx={{ bgcolor: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(148, 163, 184, 0.15)", borderRadius: 3, p: { xs: 2.5, md: 4 } }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
          What you&apos;ll learn?
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary", lineHeight: 1.9 }}>
          {course.learningOutcomes.map((outcome, index) => (
            <Box component="li" key={index}>{outcome}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Learning Format
        </Typography>
        <Typography color="text.secondary">{course.learningFormat}</Typography>
      </Box>

      {course.learningFormat === "Video" && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Self-paced Learning
          </Typography>
        </Box>
      )}

      {(course.learningFormat === "Offline" || course.learningFormat === "Live") && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Schedule
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary", lineHeight: 1.9 }}>
            {course.schedule.map((item, index) => (
              <Box component="li" key={index}>
                {item.day}: {item.time}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {course.learningFormat === "Offline" && course.location && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Location
          </Typography>
          <Typography color="text.secondary">{course.location}</Typography>
        </Box>
      )}

      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Learning Path
        </Typography>
        <Typography color="text.secondary">{course.learningPath}</Typography>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Who this course is for?
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary", lineHeight: 1.9 }}>
          {course.targetAudience.map((audience, index) => (
            <Box component="li" key={index}>{audience}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
