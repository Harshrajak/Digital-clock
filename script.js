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

let hourBox = document.querySelector(".hour-box");
let minBox = document.querySelector(".min-box");
let secBox = document.querySelector(".sec-box");
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

  hourBox.textContent = `${hr}`;
  minBox.textContent = `${min}`;
  secBox.textContent = `${sec}`;
  dateBox.textContent = `${week[day]}, ${months[month]} ${date}, ${year}`;
}, 100);
