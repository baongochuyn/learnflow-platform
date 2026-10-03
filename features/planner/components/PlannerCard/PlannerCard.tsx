import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import type { PlannerItem, PlannerItemType } from "@/types/planner";

import { useState } from "react";
import PlannerDetailDialog from "@/features/planner/components/PlannerDetailDialog";

type PlannerItemProps = {
    item: PlannerItem;
    sx?: SxProps<Theme>;
    onUpdatePlan : (data: {
        id: number;
        userId: number;
        title: string;
        date: string;
        startTime: string;
        endTime: string;
        type: PlannerItemType;
    }) => void;
};

export default function PlannerCard({
    item,
    sx,
    onUpdatePlan
}: PlannerItemProps) {
    const [detailOpen, setDetailOpen] = useState(false);

    function handlePlannerClick() {
        console.log("Clicked on planner item:", item);
        setDetailOpen(true);
    }
    function handleModify(
        updatedItem: Omit<PlannerItem, "id" | "userId">
    ) {
        onUpdatePlan({
            id: item.id,
            userId: item.userId,
            title: updatedItem.title,
            date: updatedItem.date,
            startTime: updatedItem.startTime,
            endTime: updatedItem.endTime,
            type: updatedItem.type,
        });
        setDetailOpen(false);
    }

    return (
    <Box>
        <Box onClick={handlePlannerClick}
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
        <PlannerDetailDialog
            open={detailOpen}
            plannerItem={item}
            onUpdate={handleModify}
            setOpen={setDetailOpen}
        />
    </Box>
    );
}