// INTRO START
const input = document.querySelector(".intro-text-input");
const introPageEl = document.querySelector(".intro-page");
const introOverlayEl = document.querySelector(".intro-overlay");
const heroPageEl = document.querySelector(".hero-page");
const backgroundImageEl = document.querySelector(".background-image");
let username = "";

function welcomeGreeting() {
    introOverlayEl.classList.add("hidden");
}

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        username = e.target.value;
        introPageEl.classList.add("hidden");

        setTimeout(welcomeGreeting, 3000);
    }
});

// CLOCK START

// clock elements
const arrowRotate = document.querySelector(".custom-arrow-rotate");
const clockEl = document.querySelector(".clock");
const secondsEl = document.querySelector(".seconds");
const meridiemEl = document.querySelector(".meridiem");
const heroGreetingEl = document.querySelector(".hero-greeting");

let swapTimer = true;

function clockFormat() {
    swapTimer ? (swapTimer = false) : (swapTimer = true);
    arrowRotate.classList.toggle("text-muted");
}

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    secondsEl.innerText = sec;
    meridiemEl.innerText = `${hour >= 12 ? "PM" : "AM"}`;
    heroGreetingEl.innerText = `${
        hour > 18 ? "Good Night 🌜" : "Good Day 🌞"
    }, ${username}`;

    if (swapTimer) {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    clockEl.innerText = `${hour}:${min}`;

    var timer = setTimeout(() => {
        currentTime();
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();
// DARK MODE START

// QUOTES START
const quotesEl = document.querySelector(".hero-quotes");

const quotesArray = [
    "Time is Gold!",
    "Bawal umihi dito",
    "Honesty is the best policy",
    "Cleanliness is next to Godliness",
    "No Littering",
    "Keep Off the Grass",
    "No Man is an Island",
    "No jaywalking",
    "No ID No Entry",
    "Ihi - 5, Tae - 10",
];

let num = 0;

setInterval(changeQuote, 5000);

function changeQuote() {
    num < 9 ? num++ : (num = 0);
    // introPageEl.style.backgroundImage = `url("bg-${num}.jpg")`;
    // introOverlayEl.style.backgroundImage = `url("bg-${num}.jpg")`;
    // heroPageEl.style.backgroundImage = `url("bg-${num}.jpg")`;
    backgroundImageEl.src = `bg-${num}.jpg`;
    quotesEl.innerText = `"${quotesArray[num]}"`;
}
