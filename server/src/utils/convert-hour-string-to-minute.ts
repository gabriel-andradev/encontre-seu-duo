// 18:00 -> ["18"] -> [18] -> 18 * 60 = 1080

export function convertHourStringToMinute(hourString: string) {
  const [hour, minutes] = hourString.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}