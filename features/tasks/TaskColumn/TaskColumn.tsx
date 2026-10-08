import { Box, Typography, Button } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import type { Task, TaskColumn } from "@/types/task";
import TaskItem from "../TaskItem/TaskItem";

type TaskColumnProps = {
  column: TaskColumn;
  tasks: Task[];
};

export default function TaskColumn({
  column,
  tasks,
}: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        width: 300,
        minWidth: 300,
        minHeight: 500,

        bgcolor: isOver
          ? "transparent"
          : "transparent",
        border: "1px solid rgba(255, 255, 255, 0.08)",

        borderRadius: 0.5,
        p: 2,

        transition: "background-color 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        {column.name}
      </Typography>

      <Box  sx={{
          flex: 1,
        }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </Box>

      <Button fullWidth
        sx={{ mt: 2 }}
        variant="contained"
        startIcon={<AddCircleOutlineRoundedIcon />}
        onClick={() => {}}
      >
      Add a task
      </Button>
    </Box>
  );
}