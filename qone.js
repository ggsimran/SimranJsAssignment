const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const currentDate = date.toDateString();
const currentDay = days[date.getDay()];

document.write("<b>Current Date: </b>", date, "<br>");
document.write("<b> Current Day: </b>", days);