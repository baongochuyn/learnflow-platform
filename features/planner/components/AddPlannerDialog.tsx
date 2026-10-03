import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, MenuItem} from "@mui/material";
import {useAuth} from "@/context/AuthContext";

import type { PlannerItemType } from "@/types/planner";
import DialogCustom from "@/app/components/DialogCustom";
type AddPlannerDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (data: {
        title: string;
        date: string;
        startTime: string;
        endTime: string;
        type: PlannerItemType;
    }) => void;
};
export default function AddPlannerDialog({ open, setOpen, onSubmit }: AddPlannerDialogProps) {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [type, setType] = useState<PlannerItemType | "">("");

  const typePlannerOptions: {
    value: PlannerItemType;
    label: string;
  }[] = [
    { value: "study", label: "Study" },
    { value: "assignment", label: "Assignment" },
    { value: "exam", label: "Exam" },
    { value: "reminder", label: "Reminder" },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!type ) return;
    onSubmit({
      title,
      date,
      startTime,
      endTime,
      type,
    });
  }

  if (!currentUser) {
    return <DialogCustom 
    open={open} 
    onClose={handleClose} 
    title="Add Planner"
    children={<p>You must be logged in to add a planner.</p>}
    onClick={handleClose}
    confirmText="Close"
     />;
  }

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Planner</DialogTitle>
        <DialogContent sx={{ minWidth: "500px" }}>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            slotProps={{
            inputLabel: {
                shrink: true,
            },}}
          />
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <TextField
              select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value as PlannerItemType)}
              fullWidth
              margin="dense"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            >
              <MenuItem value="">
                Select Type
              </MenuItem>

              {typePlannerOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              label="Date"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />
          </Box>
          
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <TextField
            margin="dense"
            label="Start Time"
            type="time"
            fullWidth
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            slotProps={{
        inputLabel: {
            shrink: true,
        },
    }}
          />
          <TextField
            margin="dense"
            label="End Time"
            type="time"
            fullWidth
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            slotProps={{
        inputLabel: {
            shrink: true,
        },
    }}
          />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button  variant="contained"  sx={{ minWidth: "100px" }} onClick={handleClose}>Cancel</Button>
          <Button 
          sx={{ minWidth: "100px" }}
                variant="contained" 
                onClick={handleSubmit}
                disabled={!!title && !!date && !!startTime && !!endTime && !!type ? false : true}>
                Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
