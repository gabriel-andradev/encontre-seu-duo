"use strict";
// 1080 -> 18:00 
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToHourString = void 0;
function convertMinutesToHourString(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    return `${String(hours).padStart(2, '0')}h${String(minutesLeft).padStart(2, '0')}`;
}
exports.convertMinutesToHourString = convertMinutesToHourString;
