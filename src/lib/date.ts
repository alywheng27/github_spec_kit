export function daysLeft(endDate) {
  try {
    const end = new Date(endDate);
    const now = new Date();
    // Normalize to start of today for consistent day counting
    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const diffMs = end.setHours(23, 59, 59, 999) - todayStart.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays;
  } catch {
    return 0;
  }
}
