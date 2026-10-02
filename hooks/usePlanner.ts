"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { addStudyPlan, getPlannerItems } from "@/services/plannerService";
import type { PlannerItem } from "@/types/planner";

export function usePlanner() {
  const { currentUser } = useAuth();

  const [plannerItems, setPlannerItems] = useState<PlannerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch planner items when the current user changes
  useEffect(() => {
    if (!currentUser) {
    setPlannerItems([]);
    setIsLoading(false);
    return;
    }

    setIsLoading(true);
    setError(null);

    try {
    const result = getPlannerItems(currentUser.id);
    setPlannerItems(result);
    } catch (error) {
    console.error(error);
    setError("Failed to load your planner items.");
    } finally {
    setIsLoading(false);
    }
  }, [currentUser]);

  // Function to create a new planner item
  function createPlanner(data: {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
  }) {
    if (!currentUser) {
      return;
    }

    try {
      addStudyPlan({
        userId: currentUser.id,
        title: data.title,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
      });

      setPlannerItems(getPlannerItems(currentUser.id));
    } catch (error) {
      console.error(error);
      setError("Failed to create planner item.");
    }
  }

  return {
    plannerItems,
    isLoading,
    error,
    createPlanner,
  };
}
