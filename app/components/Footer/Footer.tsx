import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#e2e8f0",
        py: 3,
        borderTop: "1px solid rgba(148, 163, 184, 0.15)",
      }}
    >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} LearnFlow. All rights reserved.
      </Typography>
    </Box>
  );
}