import { Alert, type AlertColor, Snackbar } from "@mui/material";

export default function AppSnackbar({ open, message, onClose, severity }: { open: boolean; message: string; onClose: () => void; severity?: AlertColor }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              sx={{
                top: "80px !important",
                right: "24px",
            }}
            >
            <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          minWidth: "280px",
          alignItems: "center",
          borderRadius: 1,
          fontWeight: 600,
          fontSize: "0.875rem",
          bgcolor: "#f59e0b",
          color: "#020617",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
          
        }}
      >
        {message}
      </Alert>
        </Snackbar>
    );
}