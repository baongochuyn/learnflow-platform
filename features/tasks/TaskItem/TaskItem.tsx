import { Box, Checkbox, Typography } from "@mui/material";
import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { Task } from "@/types/task";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({
  task,
}: TaskItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        display: "flex",
        alignItems: "center",

        bgcolor: "rgba(15, 23, 42, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 0.5,
        p: 1.5,
        mb: 1,

        boxShadow: 1,

        cursor: "grab",

        "&:active": {
          cursor: "grabbing",
        },
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => {}}
        onPointerDown={(event) => {
          event.stopPropagation();
        }}
      />

      <Typography
        sx={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </Typography>
    </Box>
  );
}