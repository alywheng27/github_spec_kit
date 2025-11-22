"use client";

import React, { useState } from "react";
import GoalCard from "../src/components/GoalCard.jsx";
import GoalModal from "../src/components/GoalModal.jsx";
import { GoalsProvider } from "../src/context/goals-context";
import { useGoals as useGoalsHook } from "../src/hooks/useGoals";

function MainView() {
  const {
    currentGoals,
    completedGoals,
    addGoal,
    completeGoal,
    deleteGoal,
    daysLeftForGoal,
  } = useGoalsHook();
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !endDate) return;
    addGoal(title.trim(), endDate);
    setTitle("");
    setEndDate("");
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">doit — Goal Tracker</h1>
        <p className="text-sm text-gray-600">
          Two-column view: current goals (left) and completed goals (right).
        </p>
      </header>
      <div className="grid grid-cols-2 gap-6">
        <section className="border rounded p-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Current Goals</h2>
            <button
              type="button"
              className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => setModalOpen(true)}
            >
              Add Goal
            </button>
          </div>
          <div className="space-y-2">
            {currentGoals.length === 0 && (
              <div className="text-sm text-gray-500">
                No current goals. Add one to get started.
              </div>
            )}
            {currentGoals.map((g) => (
              <GoalCard
                key={g.id}
                goal={g}
                daysLeft={daysLeftForGoal(g)}
                onComplete={() => completeGoal(g.id)}
                onDelete={() => deleteGoal(g.id)}
              />
            ))}
          </div>
        </section>
        <section className="border rounded p-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">Completed Goals</h2>
          <div className="space-y-2">
            {completedGoals.length === 0 && (
              <div className="text-sm text-gray-500">
                No completed goals yet.
              </div>
            )}
            {completedGoals.map((g) => (
              <div key={g.id} className="px-2 py-2 bg-green-50 rounded">
                {g.title}
              </div>
            ))}
          </div>
        </section>
      </div>
      <GoalModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </div>
  );
}

export default function Home() {
  return (
    <GoalsProvider>
      <MainView />
    </GoalsProvider>
  );
}
