"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import type { AlertColor } from "@mui/material";
import AppSnackbar from "@/app/components/Snackbar/AppSnackbar";

type SnackbarContextType = {
    showSnackbar: (message: string, severity?: AlertColor) => void;
    closeSnackbar: () => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function SnackbarProvider({
  children,

}: {
  children: React.ReactNode;
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("success");
  
  const showSnackbar = (message: string, severity: AlertColor = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, closeSnackbar }}>
        <AppSnackbar
            open={snackbarOpen}
            message={snackbarMessage}
            severity={snackbarSeverity}
            onClose={closeSnackbar}
        />
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error(
      "useSnackbar must be used within a SnackbarProvider"
    );
  }

  return context;
}