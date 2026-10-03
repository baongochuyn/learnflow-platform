
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, MenuItem } from "@mui/material";
import type { PlannerItem , PlannerItemType} from "@/types/planner";

type PlannerDetailDialogProps = {
    open: boolean;
    plannerItem: PlannerItem;
    onUpdate: (planner: Omit<PlannerItem, "id" | "userId">) => void;
    setOpen: (open: boolean) => void;
};

export default function PlannerDetailDialog({ open, onUpdate, plannerItem, setOpen }: PlannerDetailDialogProps) {
    const [readOnly, setReadOnly] = useState(true);
    const [title, setTitle] = useState(plannerItem.title);
     const [date, setDate] = useState(plannerItem.date);
     const [startTime, setStartTime] = useState(plannerItem.startTime);
     const [endTime, setEndTime] = useState(plannerItem.endTime);
     const [type, setType] = useState<PlannerItemType>(plannerItem.type);

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
    setTitle(plannerItem.title);
    setDate(plannerItem.date);
    setStartTime(plannerItem.startTime);
    setEndTime(plannerItem.endTime);
    setType(plannerItem.type);
    setOpen(false);
    setReadOnly(true);
  };
  const handleSave = () => {
    onUpdate({
      title,
      date,
      startTime,
      endTime,
      type,
    });
    setOpen(false);
    setReadOnly(true);
  };
return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Planner Details</DialogTitle>
        <DialogContent sx={{ minWidth: "500px" }}>
          <TextField
          disabled={readOnly}
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
                disabled={readOnly}
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
                disabled={readOnly}
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
            disabled={readOnly}
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
            disabled={readOnly}
            slotProps={{
            inputLabel: {
                shrink: true,
            },
        }}
          />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button  variant="contained"  
          sx={{ minWidth: "100px" }} 
          onClick={handleClose}>Close</Button>

            {!readOnly ? (<Button 
                sx={{ minWidth: "100px" }}
                variant="contained" 
                disabled={!!title && !!date && !!startTime && !!endTime && !!type ? false : true}
                onClick={handleSave}>Save</Button>) 
            : <Button 
                sx={{ minWidth: "100px" }}
                variant="contained" 
                onClick={() => setReadOnly(false)}>Modify</Button>}
        </DialogActions>
      </Dialog>
    );
            
}    