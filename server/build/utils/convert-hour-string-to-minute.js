"use strict";
// 18:00 -> ["18"] -> [18] -> 18 * 60 = 1080
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinute = void 0;
function convertHourStringToMinute(hourString) {
    const [hour, minutes] = hourString.split(':').map(Number);
    const timeInMinutes = hour * 60 + minutes;
    return timeInMinutes;
}
exports.convertHourStringToMinute = convertHourStringToMinute;
