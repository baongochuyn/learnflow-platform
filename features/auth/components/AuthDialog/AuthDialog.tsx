"use client";

import LoginDialog from "@/features/auth/components/AuthDialog/LoginDialog";
import SignUpDialog from "@/features/auth/components/AuthDialog/SignUpDialog";
import { useAuthDialog } from "@/context/AuthDialogContext";
import { useState } from "react";
import AppSnackbar from "@/app/components/Snackbar/AppSnackbar";

export default function AuthDialogs() {
    const {
        activeDialog,
        openLogin,
        openSignUp,
        closeAuthDialog,
    } = useAuthDialog();

    const [successMessage, setSuccessMessage] = useState("");

    function handleSignUpSuccess() {
        setSuccessMessage("Account created successfully!");
        openLogin();
    }

  return (
    <>
      <LoginDialog
        open={activeDialog === "login"}
        onClose={closeAuthDialog}
        onSignUpClick={openSignUp}
      />

      <SignUpDialog
        open={activeDialog === "signup"}
        onClose={closeAuthDialog}
        onLoginClick={openLogin}
        onSignUpSuccess={handleSignUpSuccess}
      />

      <AppSnackbar
                open={Boolean(successMessage)}
                message={successMessage}
                severity="success"
                onClose={() => setSuccessMessage("")}
            />
    </>
  );
}