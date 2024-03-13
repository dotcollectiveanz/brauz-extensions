// Function to create badges based on reservation status and hold time
export default function createBadges(reservation: any) {
  const badges = [];

  // Check reservation status
  if (reservation.reservation_status === "New") {
    badges.push({ text: "New", variant: "highlight" });

    // Check hold time
    const currentDate = new Date();
    const holdTimeFrom = new Date(reservation.hold_time_from);
    const holdTimeTo = new Date(reservation.hold_time_to);

    const isToday = currentDate.toDateString() === holdTimeFrom.toDateString();
    const isTomorrow =
      new Date(
        currentDate.setDate(currentDate.getDate() + 1),
      ).toDateString() === holdTimeFrom.toDateString();

    if (isToday) {
      badges.push({ text: "Needs action today", variant: "critical" });
    } else if (isTomorrow) {
      badges.push({ text: "Needs action", variant: "critical" });
    }
  } else if (reservation.reservation_status === "Pending") {
    badges.push({ text: "Reserved", variant: "neutral" });
  }

  return badges;
}
