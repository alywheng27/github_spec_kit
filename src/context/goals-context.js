import React, { createContext, useContext } from "react";
import { useGoals } from "../hooks/useGoals";

export const GoalsContext = createContext(null);

export const GoalsProvider = ({ children }) => {
  const value = useGoals();
  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  const ctx = useContext(GoalsContext);
  if (!ctx) {
    throw new Error("useGoalsContext must be used within a GoalsProvider");
  }
  return ctx;
};
