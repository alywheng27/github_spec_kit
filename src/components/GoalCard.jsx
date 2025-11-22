import React from "react";

export default function GoalCard({ goal, daysLeft, onComplete, onDelete }) {
  const isExpiring = typeof daysLeft === "number" && daysLeft <= 3;
  return (
    <div
      className={`flex items-center justify-between p-2 border rounded ${isExpiring ? "bg-yellow-50" : "bg-white"}`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={onComplete}
          aria-label="Complete goal"
        />
        <span className="truncate" title={goal.title}>
          {goal.title}
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>{typeof daysLeft === "number" ? `${daysLeft}d` : ""}</span>
        <button
          className="text-red-500"
          onClick={onDelete}
          aria-label="Delete goal"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
