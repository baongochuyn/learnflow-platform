import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box} from "@mui/material";

type AddPlannerDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (data: {
        title: string;
        date: string;
        startTime: string;
        endTime: string;
    }) => void;
};
export default function AddPlannerDialog({ open, setOpen, onSubmit }: AddPlannerDialogProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");


  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSubmit({
      title,
      date,
      startTime,
      endTime
    });
  }

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Planner</DialogTitle>
        <DialogContent>
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
        },
    }}
          />
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
                onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
