"use client";

import { createContext, useContext, useState } from "react";

type AuthDialog = "login" | "signup" | null;

type AuthDialogContextType = {
    activeDialog: AuthDialog;
    openLogin: () => void;
    openSignUp: () => void;
    closeAuthDialog: () => void;
};

const AuthDialogContext = createContext<AuthDialogContextType | undefined>(
  undefined
);

export function AuthDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeDialog, setActiveDialog] = useState<AuthDialog>(null);

  function openLogin() {
    setActiveDialog("login");
  }

  function openSignUp() {
    setActiveDialog("signup");
  }

  function closeAuthDialog() {
    setActiveDialog(null);
  }

  return (
    <AuthDialogContext.Provider
      value={{
        activeDialog,
        openLogin,
        openSignUp,
        closeAuthDialog,
      }}
    >
      {children}
    </AuthDialogContext.Provider>
  );
}

export function useAuthDialog() {
  const context = useContext(AuthDialogContext);

  if (!context) {
    throw new Error(
      "useAuthDialog must be used within an AuthDialogProvider"
    );
  }

  return context;
}