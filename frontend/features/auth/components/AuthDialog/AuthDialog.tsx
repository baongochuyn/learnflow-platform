"use client";

import LoginDialog from "@/features/auth/components/AuthDialog/LoginDialog";
import SignUpDialog from "@/features/auth/components/AuthDialog/SignUpDialog";
import { useAuthDialog } from "@/context/AuthDialogContext";
import { useSnackbar } from "@/context/SnackbarContext";

export default function AuthDialogs() {
    const {
        activeDialog,
        openLogin,
        openSignUp,
        closeAuthDialog,
    } = useAuthDialog();
    const { showSnackbar } = useSnackbar();

    function handleSignUpSuccess() {
        showSnackbar("Account created successfully!", "success");
        openLogin();
    }
    function handleLoginSuccess() {
        showSnackbar("Logged in successfully!", "success");
    }

  return (
    <>
      <LoginDialog
        open={activeDialog === "login"}
        onClose={closeAuthDialog}
        onSignUpClick={openSignUp}
        onLoginSuccess={handleLoginSuccess}
      />

      <SignUpDialog
        open={activeDialog === "signup"}
        onClose={closeAuthDialog}
        onLoginClick={openLogin}
        onSignUpSuccess={handleSignUpSuccess}
      />
    </>
  );
}