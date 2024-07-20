module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  /*
   ? TODO: Create a custom helper 'format_date' that takes in a timestamp,
   ? adds five years to the date, and formats it as M/D/YYYY
  */
  format_date: (date) => {
    const timeStamp = new Date(date);
    const endYear = timeStamp.getFullYear() + 5;
    const endMonth = timeStamp.getMonth() + 1;
    const endDay = timeStamp.getDay();
    const exhibition_end = `${endMonth}/${endDay}/${endYear}`;
    return exhibition_end;
  },
};
