"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getPlannerItems } from "@/services/plannerService";
import type { PlannerItem } from "@/types/planner";

export function usePlanner() {
  const { currentUser } = useAuth();

  const [plannerItems, setPlannerItems] = useState<PlannerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return {
    plannerItems,
    isLoading,
    error,
  };
}
