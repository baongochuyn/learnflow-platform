import { Box, MenuItem, TextField } from "@mui/material";
import type { CourseLevel } from "@/types/courses";

type CourseFiltersProps = {
  search: string;
  level: CourseLevel | "";
  onSearchChange: (search: string) => void;
  onLevelChange: (level: CourseLevel | "") => void;
};

export default function CourseFilters({ search, level, onSearchChange, onLevelChange }: CourseFiltersProps) {
  return (
    <Box sx={{ mb: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
      <TextField
        fullWidth
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search courses..."
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "rgba(15, 23, 42, 0.8)",
            color: "#f8fafc",
            borderRadius: 2,
          },
          "& .MuiInputBase-input::placeholder": { color: "#94a3b8" },
        }}
      />

      <TextField
        select
        value={level}
        onChange={(e) => onLevelChange(e.target.value as CourseLevel | "")}
        variant="outlined"
        size="small"
        sx={{
          minWidth: { xs: "100%", md: 220 },
          "& .MuiOutlinedInput-root": {
            bgcolor: "rgba(15, 23, 42, 0.8)",
            color: "#f8fafc",
            borderRadius: 2,
          },
        }}
      >
        <MenuItem value="">All Levels</MenuItem>
        <MenuItem value="Beginner">Beginner</MenuItem>
        <MenuItem value="Intermediate">Intermediate</MenuItem>
        <MenuItem value="Advanced">Advanced</MenuItem>
      </TextField>
    </Box>
  );
}
