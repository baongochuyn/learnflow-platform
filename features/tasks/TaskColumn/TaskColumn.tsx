import { useState } from "react";

import { Box, Typography, Button, TextField  } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import type { Task, TaskColumn } from "@/types/task";
import TaskItem from "../TaskItem/TaskItem";

type TaskColumnProps = {
  column: TaskColumn;
  tasks: Task[];
  onAddTask: (data: {
    title: string;
    description?: string;
    dueDate?: string;
    columnId: string;
  }) => void;
  onModifyTask: (updatedTask: Task) => void;
};

export default function TaskColumn({
  column,
  tasks,
  onAddTask,
  onModifyTask,
}: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });
  const [openAddTaskCard, setOpenAddTaskCard] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
    setOpenAddTaskCard(true);
  }

  function handleSaveNewTask(){
    if (newTaskTitle.trim() === "") {
      return;
    }
    onAddTask({
      title: newTaskTitle,
      columnId: column.id,
    });
    setNewTaskTitle("");
    setOpenAddTaskCard(false);
  }

  function handleCancelNewTask() {
    setNewTaskTitle("");
    setOpenAddTaskCard(false);
  }
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
            onModifyTask={onModifyTask}
          />
        ))}
      </Box>

      {/* Add Task Card */}
      <Box sx={{ mt: 2 }}>        
        {openAddTaskCard ? (
          <Box sx={{
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
          }}>
            <TextField
              placeholder="Enter a title for this card"
              variant="standard"
              fullWidth
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSaveNewTask();
                }
              }}
            />
        </Box>) : null}
      </Box>

      {/* Action Task */}
      <Box sx={{ mt: 2 }}>
        {openAddTaskCard ? (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Button fullWidth
              sx={{ mt: 2 }}
              variant="contained"
              startIcon={<AddCircleOutlineRoundedIcon />}
              onClick={handleSaveNewTask}
            >
            Add
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              endIcon={<CloseRoundedIcon />}
              onClick={handleCancelNewTask}
            ></Button>
          </Box>)
          : (<Button fullWidth
          sx={{ mt: 2 }}
          variant="outlined"
          startIcon={<AddCircleOutlineRoundedIcon />}
          onClick={handleAddTask}
        >
        Add a task
        </Button>)
        }
      </Box>
    </Box>
  );
}