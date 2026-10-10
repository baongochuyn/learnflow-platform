import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import type { Task, TaskColumn } from "@/types/task";
import TaskColumnComponent from "../TaskColumn/TaskColumn";

type TaskBoardProps = {
  columns: TaskColumn[];
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
  onAddColumn: (name: string) => void;
};

export default function TaskBoard({
  columns,
  tasks,
  onAddTask,
  onModifyTask,
  onDeleteTask,
  onUpdateColumnName,
  onDeleteColumn,
  onAddColumn
}: TaskBoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );
  const [newColumnName, setNewColumnName] = useState("");
  const [addingColumn, setAddingColumn] = useState(false);
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
          overflowX: "auto",
          p: 1,
          marginTop: 4, 
          marginBottom: 4
        }}
      >
        {columns
          .sort((a, b) => a.position - b.position)
          .map((column) => {
            const columnTasks = tasks
              .filter((task) => task.columnId === column.id)
              .sort((a, b) => a.position - b.position);

            return (
              <TaskColumnComponent
                key={column.id}
                column={column}
                tasks={columnTasks}
                onAddTask={onAddTask}
                onModifyTask={onModifyTask}
                onDeleteTask={onDeleteTask}
                onUpdateColumnName={onUpdateColumnName}
                onDeleteColumn={onDeleteColumn}
              />
            );
          })}
      
        <Box>
          {addingColumn ? (
            <Box 
              sx={{
              width: 300,
              minWidth: 300,
              minHeight: 500,

              bgcolor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.08)",

              borderRadius: 0.5,
              p: 2,

              transition: "background-color 0.2s",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            >
              <TextField
              variant="standard"
                value={newColumnName}
                onChange={(e) => setNewColumnName(e.target.value)}
                placeholder="Enter column name"
                size="small"
               
              />
              <Box sx={{ display: "flex", gap: 1 , paddingTop: 1}}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    if (newColumnName.trim()) {
                      onAddColumn(newColumnName.trim());
                      setNewColumnName("");
                      setAddingColumn(false);
                    }
                  }}
                  startIcon={<AddCircleOutlineRoundedIcon />}
                >
                  Add
                </Button>
                <Button
                fullWidth
                  variant="outlined"
                  onClick={() => {
                    setNewColumnName("");
                    setAddingColumn(false);
                  }}
                  endIcon={<CloseRoundedIcon />}
                >
                </Button>
              </Box>
            </Box>
          ) : (
        <Button fullWidth
            sx={{ alignSelf: "flex-start", mt: 2, minWidth: "200px" }}
            variant="contained"
            startIcon={<AddCircleOutlineRoundedIcon />}
            onClick={() => {setAddingColumn(true);}}
          >
            Add Column
          </Button>)
        }
        </Box>
        

      </Box>
    </DndContext>
  );
}