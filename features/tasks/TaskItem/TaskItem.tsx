import { Box, Checkbox, Typography } from "@mui/material";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';

import TaskItemDetailDialog from "./TaskItemDetailDialog";

import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { Task } from "@/types/task";
import { useState } from "react";

type TaskItemProps = {
  task: Task;
  onModifyTask: (updatedTask: Task) => void;
};

export default function TaskItem({
  task,
  onModifyTask,
}: TaskItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });
  const [openTaskDetailDialog, setOpenTaskDetailDialog] = useState(false);
  const [completed, setCompleted] = useState(task.completed);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleCheckboxChange = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    onModifyTask({ ...task, completed: newCompleted });
  };

  function formatDueDateTime(value?: string) {
  if (!value) return "";

  const [datePart, timePart] = value.split("T");
  const [year, month, day] = datePart.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });

  return timePart
    ? `${formattedDate} · ${timePart.slice(0, 5)}`
    : formattedDate;
}
  return (
  <Box>
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        direction: "row",
        alignItems: "center",

        bgcolor: "rgba(15, 23, 42, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 0.5,
        p: 1.5,
        mb: 1,

        boxShadow: 1,

        cursor: "grab",
        transition: "all 0.2s ease",

        "&:active": {
          cursor: "grabbing",
        },
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.35)",
            borderColor: "rgba(245, 158, 11, 0.5)",
          },
      }}
    >
      {task.labels?.[0]?.color && (
        <Box
          sx={{
            width: 50,
            height: 10,
            bgcolor: task.labels[0].color,
            borderRadius: 0.5,
            mb: 1,
          }}
        />
      )}
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}>
        <Checkbox
          checked={task.completed}
          onChange={handleCheckboxChange}
          onPointerDown={(event) => {
            event.stopPropagation();
          }}
          icon={<RadioButtonUncheckedRoundedIcon />}
          checkedIcon={<RadioButtonCheckedRoundedIcon />}
        />

        <Typography
          sx={{
            fontSize: 14,
            textDecoration: task.completed
              ? "line-through"
              : "none",
          }}
          onClick={() => setOpenTaskDetailDialog(true)}
        >
          {task.title}
        </Typography>
      </Box>

      {task.dueDateTime && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          ml: 1,
          mt: 0.5,
          color: "text.secondary",
        }}
      >
        <AccessAlarmsRoundedIcon
          sx={{
            fontSize: 16,
            color: "text.disabled",
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            fontSize: 10,
          }}
        >
          {formatDueDateTime(task.dueDateTime)}
        </Typography>
      </Box>)
      }
     
    </Box>
    <TaskItemDetailDialog
      task={task}
      open={openTaskDetailDialog}
      onClose={() => setOpenTaskDetailDialog(false)}
      onModifyTask={onModifyTask}
    />
  </Box>
  );
}