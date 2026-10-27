import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { checkEnrollmentStatus, enrollCourse } from "@/services/enrollmentService";

export function useEnrollments(courseId: number) {
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { currentUser } = useAuth();

    // Check if the current user is enrolled in the course
    useEffect(() => {
        if (!currentUser) {
        setIsEnrolled(false);
        setIsLoading(false);
        return;
        }

        const enrolled = checkEnrollmentStatus(
        currentUser.id,
        courseId
        );

        setIsEnrolled(enrolled);
        setIsLoading(false);
    }, [currentUser, courseId]);

    const enroll = async () => {
        if (!currentUser) {
            return {
            success: false,
            message: "You must be logged in.",
            };
        }

        const result = await enrollCourse(
            currentUser.id,
            courseId
        );

        if (result.success) {
            setIsEnrolled(true);
        }

        return result;
    };

    return {
        isEnrolled,
        enroll,
    }
}
