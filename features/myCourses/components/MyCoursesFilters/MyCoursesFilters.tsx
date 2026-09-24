import { Box, Stack, Chip } from "@mui/material";
import type { MyCourseStatus } from "@/types/myCourses";

export default function MyCoursesFilters({ selectedStatus, onStatusChange }: { selectedStatus: MyCourseStatus | ""; onStatusChange: (status: MyCourseStatus | "") => void }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Stack direction="row" spacing={1}>
        <Chip
          label="All"
          variant={selectedStatus === "" ? "filled" : "outlined"}
          onClick={() => onStatusChange("")}
        />
        <Chip
          label="In Progress"
          variant={selectedStatus === "in_progress" ? "filled" : "outlined"}
          onClick={() => onStatusChange("in_progress")}
        />
        <Chip
          label="Completed"
          variant={selectedStatus === "completed" ? "filled" : "outlined"}
          onClick={() => onStatusChange("completed")}
        />
      </Stack>
    </Box>
  );
}