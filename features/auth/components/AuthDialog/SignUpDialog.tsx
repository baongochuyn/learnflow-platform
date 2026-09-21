import { useState } from "react";
import { DialogTitle, DialogContent, TextField, Button, Typography, DialogActions, Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import { useAuth } from "@/context/AuthContext";
import StudentSignUpForm from "@/features/auth/components/AuthDialog/StudentSignUpForm";
import TeacherSignUpForm from "@/features/auth/components/AuthDialog/TeacherSignUpForm";
import type { StudentSignUpFormData, TeacherSignUpFormData } from "@/types/auth";

export default function SignUpDialog({ 
  open, 
  onClose,
  onLoginClick ,
  onSignUpSuccess
}: { 
  open: boolean; 
  onClose: () => void; 
  onLoginClick: () => void;
  onSignUpSuccess: () => void;}
) {
    const [error, setError] = useState<string | null>(null);
    const { StudentSignUp, TeacherSignUp } = useAuth();

    const [accountType, setAccountType] = useState<"student" | "teacher">("student");

    async function handleStudentSignUp(student : StudentSignUpFormData) {
        const reponse = await StudentSignUp(student);
        if (reponse.success) {
          //TODO : Handle successful sign-up (e.g., show a success message, close the dialog, etc.)
          onSignUpSuccess();
          return;
        } else {
            setError(reponse.message);
        }
    }
    async function handleTeacherSignUp(teacher : TeacherSignUpFormData) {
        const reponse = await TeacherSignUp(teacher);
        if (reponse.success) {
          //TODO : Handle successful sign-up (e.g., show a success message, close the dialog, etc.)
          onSignUpSuccess();
          return;
        } else {
            setError(reponse.message);
        }
    }

    return (
    <Dialog open={open} onClose={onClose}
    fullWidth
      maxWidth="xs"
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
      <DialogTitle sx={{ m: 0, p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        Sign Up
      </DialogTitle>
      <DialogContent sx={{
        width: "100%",
        mb: 2}}
        >
          <Typography sx={{ mb: 2 }}>
            <Link component="button" onClick={() => setAccountType("student")} sx={ { fontWeight: accountType === "student" ? "bold" : "normal", mr: 1 }}>
              Sign up as a student
            </Link>
            {" or "}
            <Link component="button" onClick={() => setAccountType("teacher")} sx={ { fontWeight: accountType === "teacher" ? "bold" : "normal", mr: 1 }}>
              Sign up as a teacher
            </Link>
          </Typography>

          {error && (
            <Typography color="error">{error}</Typography>
            )}

          {accountType === "student" && (
            <StudentSignUpForm
              onStudentSignUp={(user) => handleStudentSignUp(user)}
            />
          )}

          {accountType === "teacher" && (
            <TeacherSignUpForm
              onTeacherSignUp={(teacher) => handleTeacherSignUp(teacher)}
            />
          )}

      </DialogContent>
      <DialogActions>
         <DialogActions sx={{ padding: "20px", textAlign: "center" }}>
            <Typography>
                Do you have an account?
                <Link 
                    component="button"
                    sx={{ ml: 0.5 }}
                    onClick={onLoginClick}
                >
                    Log in
                </Link>
            </Typography>
        </DialogActions>
        <Button onClick={onClose}>Cancel</Button>

      </DialogActions>
    </Dialog>
  );
}