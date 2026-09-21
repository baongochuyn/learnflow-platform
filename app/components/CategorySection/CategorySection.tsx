"use client";

import { useState } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { categories } from "@/data/categories";

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Typography
        variant="overline"
        sx={{
          mb: 2,
          color: "#f59e0b",
          letterSpacing: 2,
          fontWeight: 800,
          fontSize: "0.75rem",
        }}
      >
        Explore by Topic
      </Typography>

      <Stack
        direction="row"
        spacing={1.25}
        sx={{
          width: "100%",
          justifyContent: { xs: "flex-start", md: "center" },
          overflowX: "auto",
          py: 1,
          px: 0.5,
          flexWrap: "nowrap",
          
          /* Ẩn thanh trượt ngang trên mọi trình duyệt */
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari, Edge
          msOverflowStyle: "none", // IE/Edge cũ
        }}
      >
        {/* Chip: All Topics */}
        <Chip
          label="All Topics"
          clickable
          onClick={() => setActiveCategory(null)}
          sx={{
            px: 1.5,
            py: 2.2,
            fontWeight: 700,
            fontSize: "0.875rem",
            borderRadius: "9999px",
            transition: "all 0.25s ease-in-out",
            bgcolor: activeCategory === null ? "#f59e0b" : "rgba(15, 23, 42, 0.6)",
            color: activeCategory === null ? "#020617" : "#94a3b8",
            border: "1px solid",
            borderColor: activeCategory === null ? "#f59e0b" : "rgba(255, 255, 255, 0.08)",
            boxShadow: activeCategory === null ? "0 0 15px rgba(245, 158, 11, 0.35)" : "none",
            "&:hover": {
              bgcolor: activeCategory === null ? "#d97706" : "rgba(30, 41, 59, 0.8)",
              color: activeCategory === null ? "#020617" : "#f8fafc",
              transform: "translateY(-2px)",
              borderColor: activeCategory === null ? "#d97706" : "rgba(255, 255, 255, 0.2)",
            },
          }}
        />

        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <Chip
              key={cat.id}
              label={cat.name}
              clickable
              onClick={() => setActiveCategory(cat.id)}
              sx={{
                px: 1.5,
                py: 2.2,
                fontWeight: 700,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                transition: "all 0.25s ease-in-out",
                bgcolor: isActive ? "#f59e0b" : "rgba(15, 23, 42, 0.6)",
                color: isActive ? "#020617" : "#94a3b8",
                border: "1px solid",
                borderColor: isActive ? "#f59e0b" : "rgba(255, 255, 255, 0.08)",
                boxShadow: isActive ? "0 0 15px rgba(245, 158, 11, 0.35)" : "none",
                "&:hover": {
                  bgcolor: isActive ? "#d97706" : "rgba(30, 41, 59, 0.8)",
                  color: isActive ? "#020617" : "#f8fafc",
                  transform: "translateY(-2px)",
                  borderColor: isActive ? "#d97706" : "rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}