import { Box, Typography } from "@mui/material";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(148,163,184,0.2)",
        borderBottom: "1px solid rgba(148,163,184,0.2)",
        bgcolor: "rgba(15,23,42,0.45)",
        backdropFilter: "blur(12px)",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
          gap: 2,
        }}
      >
        {stats.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 2,
              borderRadius: 3,
              transition: "all 0.2s ease",
              "&:hover": { bgcolor: "rgba(30,41,59,0.4)" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, color: item.colorClass }}>
              {item.value}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 700, color: "#e2e8f0" }}>
              {item.label}
            </Typography>
            {item.description && (
              <Typography variant="caption" sx={{ mt: 0.5, color: "#94a3b8" }}>
                {item.description}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}