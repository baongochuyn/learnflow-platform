import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface DialogCustomProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  confirmText?: string;
}

export default function DialogCustom({
  open,
  onClose,
  title,
  children,
  onClick,
  confirmText = "Confirm",
}: DialogCustomProps) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            bgcolor: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(16px)",
            color: "#f8fafc",
            borderRadius: 1, 
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            p: 1,
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="span" sx={{ fontWeight: 700, color: "#f8fafc" }}>
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: "#94a3b8",
            "&:hover": {
              color: "#f8fafc",
              bgcolor: "rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ p: 2, color: "#cbd5e1" }}>
        {children}
      </DialogContent>

      {/* Action Buttons*/}
      <DialogActions>
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            flex: 1,
            borderRadius: 2,
            py: 1,
            bgcolor: "#f59e0b",
            color: "#020617",
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.25)",
            "&:hover": {
              bgcolor: "#d97706",
              boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
            },
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}