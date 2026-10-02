// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

//To get the current time of machine we need to use Date class in the program.

const localTime = new Date().toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
console.log(localTime); // Output: "10:15:30 PM"


const now = new Date();

const hh = String(now.getHours()).padStart(2, '0');
const mm = String(now.getMinutes()).padStart(2, '0');
const ss = String(now.getSeconds()).padStart(2, '0');

console.log(`${hh}:${mm}:${ss}`); // Output: "22:15:30"


// • getHours(): Returns the hour (0–23) based on local time.
// • getMinutes(): Returns the minutes (0–59).
// • getSeconds(): Returns the seconds (0–59).
// • padStart(2, '0'): Pads single digits (e.g., 5 becomes 05) for consistent HH:MM:SS