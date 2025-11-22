import React from "react";

export default function GoalModal({
  open,
  onClose,
  onSubmit,
  title,
  setTitle,
  endDate,
  setEndDate,
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow p-4 w-96">
        <h3 className="text-lg font-semibold mb-2">Add Goal</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <label className="text-sm">Title</label>
          <input
            className="border rounded px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="text-sm">End Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              className="px-3 py-1 rounded bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded bg-blue-500 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
