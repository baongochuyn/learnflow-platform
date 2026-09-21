"use client";

import {useState} from "react";
import {Typography}  from "@mui/material";

import EnrollmentCard from "@/features/courseDetails/components/EnrollmentCard/EnrollmentCard";
import type { Course } from "@/types/courses";
import { useAuth } from "@/context/AuthContext";
import { useAuthDialog } from "@/context/AuthDialogContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { useEnrollments } from "@/hooks/useEnrollments";

import DialogCustom from "@/app/components/DialogCustom";
//import { enrollments } from "@/data/enrollments";

export default function EnrollmentSection({ course }: { course: Course }) {
    const [confirmationOpen, setConfirmationOpen] = useState(false);

    const { currentUser } = useAuth();
    const { openLogin } = useAuthDialog();
    const { showSnackbar } = useSnackbar();

    const { isEnrolled, enroll } = useEnrollments(course.id);

    const handleEnrollClick = () => {
        if (!currentUser) {
            openLogin();
            return;
        }
        setConfirmationOpen(true);
    };

    const handleConfirmEnrollment = async () => {
        const result = await enroll();

        if (!result.success) {
            showSnackbar(result.message, "error");
            return;
        }

        //console.log(enrollments);
        setConfirmationOpen(false);
        showSnackbar(result.message, "success");
    };

    return (
        <div>
            <EnrollmentCard course={course} onEnroll={handleEnrollClick} isEnrolled={isEnrolled} />
   
            
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
        </div>
    )
}