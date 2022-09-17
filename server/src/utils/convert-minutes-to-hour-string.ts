// 1080 -> 18:00 

export function convertMinutesToHourString(minutes: any) {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${String(hours).padStart(2, '0')}h${String(minutesLeft).padStart(2, '0')}`;
}