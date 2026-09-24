"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getMyCourses } from "@/services/myCourseService";
import type { MyCourse } from "@/types/myCourses";

export function useMyCourses() {
  const { currentUser } = useAuth();

  const [courses, setCourses] = useState<MyCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMyCourses() {
      if (!currentUser) {
        setCourses([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await getMyCourses(currentUser.id);
        setCourses(result);
      } catch (error) {
        console.error(error);
        setError("Failed to load your courses.");
      } finally {
        setIsLoading(false);
      }
    }

    loadMyCourses();
  }, [currentUser]);

  return {
    courses,
    isLoading,
    error,
  };
}