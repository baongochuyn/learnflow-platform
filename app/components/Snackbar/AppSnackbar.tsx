import { Alert, type AlertColor, Snackbar } from "@mui/material";

export default function AppSnackbar({ open, message, onClose, severity }: { open: boolean; message: string; onClose: () => void; severity?: AlertColor }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
            <Alert 
                onClose={onClose} 
                severity={severity || "info"} 
                sx={{
                    width: "100%",
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    }}
                >
                {message}
            </Alert>
        </Snackbar>
    );
}