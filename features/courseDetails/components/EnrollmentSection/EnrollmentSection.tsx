"use client";

import {useState} from "react";
import EnrollmentCard from "@/features/courseDetails/components/EnrollmentCard/EnrollmentCard";
import type { Course } from "@/types/courses";
import LoginDialog from "@/features/auth/components/LoginDialog/LoginDialog";
import { useAuth } from "@/context/AuthContext";
import DialogCustom from "@/app/components/DialogCustom";
import AppSnackbar from "@/app/components/Snackbar/AppSnackbar";
import {Typography ,AlertColor}  from "@mui/material";


export default function EnrollmentSection({ course }: { course: Course }) {
    const { isLoggedIn } = useAuth();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("success");


    const [loginOpen, setLoginOpen] = useState(false);
    const [confirmationOpen, setConfirmationOpen] = useState(false);

    const handleEnrollClick = () => {
        if (!isLoggedIn) {
            setLoginOpen(true);
        } else {
            setConfirmationOpen(true);
        }
    };
    
    const handleLoginSuccess = () => {
        setSnackbarMessage("Login successful!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setLoginOpen(false);
        setConfirmationOpen(true);
    };

    const handleLoginError = (message: string) => {
        setSnackbarMessage(message);
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
    };

    const handleConfirmEnrollment = () => {
        // TODO: Handle the enrollment logic here
        setConfirmationOpen(false);
        setIsEnrolled(true);
        setSnackbarMessage("Enrollment successful!");
        setSnackbarOpen(true);
    };


    return (
        <div>
            <EnrollmentCard course={course} onEnroll={handleEnrollClick} isEnrolled={isEnrolled} />
            <LoginDialog open={loginOpen} 
                        onClose={() => setLoginOpen(false)} 
                        onLoginSuccess={handleLoginSuccess} 
                        onLoginError={handleLoginError}
                        />
            
            <DialogCustom
                open={confirmationOpen}
                onClose={() => setConfirmationOpen(false)}
                title="Enrollment Confirmation"
                onClick={handleConfirmEnrollment}
                confirmText="Confirm Enrollment"
            >
                <Typography variant="body1" sx={{ color: "#cbd5e1" }}>
                Are you sure you want to enroll in <strong>{course.title}</strong>? You will get instant access to all course materials.
                </Typography>
            </DialogCustom>
            
            <AppSnackbar
                open={snackbarOpen}
                message={snackbarMessage}
                onClose={() => setSnackbarOpen(false)}
                severity={snackbarSeverity}
            />
        </div>
    )
}