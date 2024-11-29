const sideBar = document.querySelector(".sideNav");
const sideBtn = document.querySelector(".sideBtn");
const navbarUl = document.querySelector(".navbarUl");
const cancelBtn = document.querySelector(".cancel");

sideBtn.addEventListener("click", () => {
  console.log("button clicked");
  sideBar.style.display = "flex";
  sideBtn.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
  console.log("button clicked");
  sideBar.style.display = "none";
  sideBtn.style.display = "flex";
});

function myFunction(x) {
  if (x.matches) {
    navbarUl.style.display = "flex";
    sideBtn.style.display = "none";
    sideBar.style.display = "none";
  } else {
    sideBtn.style.display = "flex";
    navbarUl.style.display = "none";
  }
}

let x = window.matchMedia("(min-width: 400px)");
myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});

const months = [
  "January",
  "February",
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const infoFree = document.querySelector(".infoFree");
const deadline = document.querySelector(".deadline");
const formats = document.querySelector(".formats");

const items = document.querySelectorAll(".items");
let nextDate = new Date(2024, 12, 12, 13, 50, 0);
const year = nextDate.getFullYear();
const hours = nextDate.getHours();
const minutes = nextDate.getMinutes();
const seconds = nextDate.getSeconds();

let month = nextDate.getMonth();
month = months[month];
const date = nextDate.getDate();
const days = weekdays[nextDate.getDay()];

infoFree.textContent = `Free travel ends on ${date} ${month} ${days}, ${year} ${hours}:${minutes} am`;
//tine in millisec
const futureTime = nextDate.getTime();
getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;

  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let daysLeft = t / oneDay;
  daysLeft = Math.floor(daysLeft);

  let hrsLeft = (t % oneDay) / oneHr;

  hrsLeft = Math.floor(hrsLeft);
  let minLeft = Math.floor((t % oneHr) / oneMin);
  let secLeft = Math.floor((t % oneMin) / 1000);
  const values = [daysLeft, hrsLeft, minLeft, secLeft];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<div class="text-xl font-bold">Deal Expired</div>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
