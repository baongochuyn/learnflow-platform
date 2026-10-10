import { useState } from "react";

import { Box, Typography, Button, TextField, Menu, MenuItem  } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import type { Task, TaskColumn } from "@/types/task";
import TaskItem from "../TaskItem/TaskItem";
import DialogCustom from "@/app/components/DialogCustom";

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
  onDeleteTask: (taskId: string) => void;
  onUpdateColumnName: (columnId: string, newName: string) => void;
  onDeleteColumn: (columnId: string) => void;
};

export default function TaskColumn({
  column,
  tasks,
  onAddTask,
  onModifyTask,
  onDeleteTask,
  onUpdateColumnName,
  onDeleteColumn
}: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });
  const [openAddTaskCard, setOpenAddTaskCard] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [columnName, setColumnName] = useState(column.name);
  const [readOnly, setReadOnly] = useState(true);
  const [confirmDeleteColumn, setConfirmDeleteColumn] = useState(false);

  /**
   * Region: Column Menu
   */

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleColumnNameChange = () => {
    if (columnName.trim() === "") {
      setColumnName(column.name); // Reset to original name if empty
      setReadOnly(true);
      return;
    }

    onUpdateColumnName(column.id, columnName);
    setReadOnly(true);
  };

  /**
   * Region: Actions with Task Card
   */

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
  <Box>
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
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        { readOnly ? (
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
        >
          {columnName}
        </Typography>) : (
          <TextField
            variant="standard"
            value={columnName}
            onChange={(e) => {
              setColumnName(e.target.value);
            }}
            onBlur={handleColumnNameChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleColumnNameChange();
                event.currentTarget.blur();
              }
            }}
          />)}
        <Button
          variant="text"
          size="small"
          sx={{ minWidth: "auto", color: "text.secondary", mb: 2 }}
          onClick={handleMenuOpen}
        >
          <MoreHorizRoundedIcon />
        </Button>

        <Menu
          anchorEl={menuAnchor}
          open={menuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              setReadOnly(false);
              handleMenuClose();
            }}
          >
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleMenuClose();
              setConfirmDeleteColumn(true);
            }}
            sx={{ color: "error.main" }}
          >
            Delete
          </MenuItem>
        </Menu>
      </Box>  
      <Box  sx={{
          flex: 1,
        }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onModifyTask={onModifyTask}
            onDeleteTask={onDeleteTask}
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
    <DialogCustom
        open={confirmDeleteColumn}
        onClose={() => setConfirmDeleteColumn(false)}
        title="Delete Column"
        onClick={() => {
          onDeleteColumn(column.id);
          setConfirmDeleteColumn(false);
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Are you sure you want to delete column {column.name}? All tasks in this column will also be deleted.
        </Typography>
      </DialogCustom>
    </Box>
  );
}