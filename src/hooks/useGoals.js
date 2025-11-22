"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { daysLeft } from "../lib/date";

const STORAGE_KEY = "doit_goals";

function loadGoals() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveGoals(goals) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  } catch {
    // ignore storage errors
  }
}

export function useGoals() {
  const [goals, setGoals] = useState(loadGoals);
  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = useCallback((title, endDate) => {
    const newGoal = {
      id: Math.random().toString(36).slice(2, 9),
      title,
      endDate,
      createdDate: new Date().toISOString(),
      status: "current",
    };
    setGoals((g) => [newGoal, ...g]);
  }, []);

  const completeGoal = useCallback((id) => {
    setGoals((gs) =>
      gs.map((g) => (g.id === id ? { ...g, status: "completed" } : g)),
    );
  }, []);

  const deleteGoal = useCallback((id) => {
    setGoals((gs) => gs.filter((g) => g.id !== id));
  }, []);

  const updateGoalTitle = useCallback((id, newTitle) => {
    setGoals((gs) =>
      gs.map((g) => (g.id === id ? { ...g, title: newTitle } : g)),
    );
  }, []);

  const daysLeftForGoal = useCallback((g) => daysLeft(g.endDate), []);

  const currentGoals = useMemo(
    () => goals.filter((g) => g.status === "current"),
    [goals],
  );
  const completedGoals = useMemo(
    () => goals.filter((g) => g.status === "completed"),
    [goals],
  );

  return {
    goals,
    currentGoals,
    completedGoals,
    addGoal,
    completeGoal,
    deleteGoal,
    updateGoalTitle,
    daysLeftForGoal,
  };
}
