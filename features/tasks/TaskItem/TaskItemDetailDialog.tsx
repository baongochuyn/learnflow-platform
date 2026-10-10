import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,Checkbox, 
  TextField, Box,Typography, Select, MenuItem } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import type { Task, TaskLabel } from "@/types/task";
import {taskLabels} from "@/data/tasks";

type TaskItemDetailDialogProps = {
  task: Task;
  open: boolean;
  onClose: () => void;
  onModifyTask: (updatedTask: Task) => void;
};
export default function TaskItemDetailDialog(
  { task, open, onClose, onModifyTask }: TaskItemDetailDialogProps) {
  const [readOnly, setReadOnly] = useState(true);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [dueDateTime, setDueDateTime] = useState(task.dueDateTime || "");
  const [selectedLabelId, setSelectedLabelId] = useState( task.labels?.[0]?.id ?? "" );
  const [completed, setCompleted] = useState(task.completed);

  const [date = "", time = ""] = dueDateTime.split("T");

  const handleDateChange = (newDate: string) => {
    if (!newDate) {
      setDueDateTime("");
      return;
    }

    setDueDateTime(
      time ? `${newDate}T${time}` : newDate
    );
  };

  const handleTimeChange = (newTime: string) => {
    if (!newTime) {
      setDueDateTime(date || "");
      return;
    }

    setDueDateTime(
      `${date || new Date().toLocaleDateString("en-CA")}T${newTime}`
    );
  };

  const handleLabelChange = (newLabelId: string) => {

    setSelectedLabelId(newLabelId);
  };

  const handleClose = () => {
    console.log("Closing dialog and resetting state");
    setTitle(task.title);
    setDescription(task.description || "");
    setDueDateTime(task.dueDateTime || "");
    onClose();
    setReadOnly(true);
    setSelectedLabelId(task.labels?.[0]?.id ?? "");
  };

  const handleSave = () => {
    const selectedLabel = taskLabels.find(
      (label) => label.id === selectedLabelId
    );

    const updatedTask: Task = {
      ...task,
      title,
      description,
      dueDateTime: dueDateTime || undefined,
      completed,
      labels: selectedLabel ? [selectedLabel] : [],
    };
    onModifyTask(updatedTask);
    setReadOnly(true);
    onClose();
  };
  
  return (
    <Dialog open={open} onClose={handleClose} sx={{ minWidth: 400 }}>
      <DialogTitle>
        <Typography variant="h6" component="div">
          Task Details
        </Typography>

        <Button
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ClearRoundedIcon />
        </Button>
      </DialogTitle>
      <DialogContent dividers>
         <Select
            value={selectedLabelId}
            onChange={(e) => handleLabelChange(e.target.value)}
            disabled={readOnly}
            renderValue={(selectedId) => {
              const selectedLabel = taskLabels.find(
                (label) => label.id === selectedId
              );

              if (!selectedLabel) {
                return (
                  <Box
                    sx={{
                      width: 100,
                      height: 10,
                      borderColor: "divider",
                      borderRadius: 0.5,
                    }}
                  />
                );
              }

              return (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 20,
                    bgcolor: selectedLabel.color,
                    borderRadius: 0.5,
                  }}
                />
                {selectedLabel.name}
              </Box>
              );
            }}
            sx={{
              width: 150,
              height: 30,
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px !important",
              },
              "& .MuiSelect-icon": {
                display: "none",
              },
            }}
          >
            <MenuItem value="">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    border: "1px dashed",
                    borderColor: "divider",
                    borderRadius: 0.5,
                  }}
                />
                No Label
              </Box>
            </MenuItem>

            {taskLabels.map((label) => (
              <MenuItem key={label.id} value={label.id}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: label.color,
                      borderRadius: 0.5,
                    }}
                  />
                  {label.name}
                </Box>
              </MenuItem>
            ))}
          </Select>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Checkbox
            checked={completed}
            onChange={() => setCompleted(!completed)}
            disabled={readOnly}
          />
          <TextField
          variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            slotProps={{
              input: {
                readOnly: readOnly,
              },
            }}
          />
        </Box>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          slotProps={{
            input: {
              readOnly: readOnly,
            },
            inputLabel: {
                shrink: true,
            },
          }}
          sx={{
            minWidth: 400,
          }}
        />
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
         
        <TextField
          label="Due Date"
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
          fullWidth
          margin="normal"
          slotProps={{ 
            input: {
              readOnly: readOnly,
            },
            inputLabel: {
                shrink: true,
            },}}
        />
        <TextField
          label="Time"
          type="time"
          value={time}
          onChange={(e) => handleTimeChange(e.target.value)}
          fullWidth
          margin="normal"
          slotProps={{
            input: {
              readOnly: readOnly,
            },
            inputLabel: {
                shrink: true,
            },}}
        />

        </Box>
      </DialogContent>
      <DialogActions>
        {readOnly ? (
          <Button onClick={() => setReadOnly(false)} color="primary">
            Edit
          </Button>
        ) : (
          <>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              color="primary"
            >
              Save
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}