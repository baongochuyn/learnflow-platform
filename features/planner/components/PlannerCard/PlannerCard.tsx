import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import type { PlannerItem as PlannerItemType } from "@/types/planner";

type PlannerItemProps = {
    item: PlannerItemType;
    sx?: SxProps<Theme>;
};

export default function PlannerCard({
    item,
    sx
}: PlannerItemProps) {
    return (
        <Box
            sx={{
                position: "absolute",

                left: 4,
                right: 4,

                borderRadius: 1.5,

                border: "1px solid",
                borderColor: "primary.main",

                bgcolor: "primary.50",

                px: 1.5,
                py: 1,

                overflow: "hidden",

                cursor: "pointer",

                transition:
                    "box-shadow 0.15s ease",

                "&:hover": {
                    boxShadow: 2,
                },

                ...sx,
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 0.5,
                }}
            >
                {item.title}
            </Typography>


            <Typography
                variant="caption"
                sx={{
                    color: "text.secondary",
                }}
            >
                {item.startTime} – {item.endTime}
            </Typography>
        </Box>
    );
}