export default function dateFormatter({
  hold_time_from,
  hold_time_to,
}: {
  hold_time_from: number;
  hold_time_to: number;
}) {
  // Convert timestamps to Date objects
  const startDate = new Date(hold_time_from);
  const endDate = new Date(hold_time_to);

  // Define days of the week and months
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startTimeString = `${startDate.getHours()}:${startDate.getMinutes().toString().padStart(2, "0")} ${startDate.getHours() < 12 ? "AM" : "PM"}`;
  const endTimeString = `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, "0")} ${endDate.getHours() < 12 ? "AM" : "PM"}`;

  // Create formatted string
  const formattedReservation = `${startTimeString} - ${endTimeString}`;
  // Format date strings
  const startDateString = `${daysOfWeek[startDate.getDay()]} ${months[startDate.getMonth()]} ${startDate.getDate()}, ${startDate.getHours()}:${startDate.getMinutes().toString().padStart(2, "0")} ${startDate.getHours() < 12 ? "AM" : "PM"}`;
  const endDateString = `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, "0")} ${endDate.getHours() < 12 ? "AM" : "PM"}`;

  // Create formatted string
  const formattedString = `${startDateString} - ${endDateString}`;

  return { formattedString, formattedReservation };
  // Output: Sat Jan 20, 9:00 AM - 9:30 AM
}
