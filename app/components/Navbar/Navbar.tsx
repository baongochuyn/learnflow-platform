"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Schedule", href: "/schedule" },
    { name: "Tasks", href: "/tasks" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", minHeight: 72 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              p: 0,
              minWidth: 0,
              color: "#f59e0b",
              fontWeight: 900,
              letterSpacing: 1.2,
              textTransform: "none",
              fontSize: "1.7rem",
              "&:hover": { color: "#fbbf24" },
            }}
          >
            <Typography
              component="span"
              sx={{
                background: "linear-gradient(135deg, #fbbf24 0%, #fb923c 50%, #fef3c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
              }}
            >
              Learn
            </Typography>
            <Typography component="span" sx={{ color: "#a5b4fc", fontWeight: 900 }}>
              Flow
            </Typography>
          </Button>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={1}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    position: "relative",
                    color: isActive ? "#fbbf24" : "#cbd5e1",
                    fontWeight: isActive ? 700 : 500,
                    px: 1.5,
                    py: 0.75,
                    minWidth: 0,
                    textTransform: "none",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 12,
                      right: 12,
                      bottom: 6,
                      height: 2,
                      borderRadius: 999,
                      backgroundColor: "#f59e0b",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform 0.2s ease",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
