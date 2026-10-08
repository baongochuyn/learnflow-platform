import { Box, Button } from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
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
};

export default function TaskBoard({
  columns,
  tasks,
}: TaskBoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

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
              />
            );
          })}
      
          
        <Button fullWidth
          sx={{ alignSelf: "flex-start", mt: 2, minWidth: "200px" }}
          variant="contained"
          startIcon={<AddCircleOutlineRoundedIcon />}
          onClick={() => {}}
        >
          Add Column
        </Button>

      </Box>
    </DndContext>
  );
}