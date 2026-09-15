import Link from "next/link";
import { Card, CardActionArea, Stack, Typography } from "@mui/material";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          bgcolor: "rgba(15, 23, 42, 0.8)",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.35)",
            borderColor: "rgba(245, 158, 11, 0.5)",
          },
        }}
      >
        <CardActionArea sx={{ height: "100%", p: 3 }}>
          <Stack spacing={1.5}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: "#f8fafc" }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
    </Link>
  );
}