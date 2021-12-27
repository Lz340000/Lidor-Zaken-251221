export const toDisplayTime = time => {
    const timeDate = new Date(time);
   return timeDate.toLocaleString();
}

export const getDayName = time => {
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date(time);
return days[d.getDay()];
}
