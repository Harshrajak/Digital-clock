const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let timeBox = document.querySelector(".time-box");
let dateBox = document.querySelector(".date-box");

setInterval(() => {
  let d = new Date();

  // Time
  let hr = d.getHours().toString().padStart(2, "0");
  let min = d.getMinutes().toString().padStart(2, "0");
  let sec = d.getSeconds().toString().padStart(2, "0");

  // Date
  let date = d.getDate().toString().padStart(2, "0");
  let day = d.getDay();
  let month = d.getMonth();
  let year = d.getFullYear();

  timeBox.textContent = `${hr} : ${min} : ${sec}`;
  dateBox.textContent = `${week[day]}, ${months[month]} ${date}, ${year}`;
}, 100);
