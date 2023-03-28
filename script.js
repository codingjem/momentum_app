// INTRO START
const input = document.querySelector(".intro-text-input");
const introPageEl = document.querySelector(".intro-page");
const introOverlayEl = document.querySelector(".intro-overlay");
const heroPageEl = document.querySelector(".hero-page");
const backgroundImageEl = document.querySelector(".background-image");
let username = "";

function enterHeroPage() {
    heroPageEl.classList.remove("hidden");
}

function enterOverlay() {
    introOverlayEl.classList.add("invisible");
    setTimeout(enterHeroPage, 500);
}

function welcomeGreeting() {
    introOverlayEl.classList.remove("hidden");
    setTimeout(enterOverlay, 2000);
}
// local storage
let storedUsername = "";
storedUsername = localStorage.getItem("value");
console.log(storedUsername);

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        username = e.target.value;
        localStorage.setItem("value", username);
        storedUsername = localStorage.getItem("value");
        console.log(storedUsername);
        introPageEl.classList.add("hidden");

        setTimeout(welcomeGreeting, 500);
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
    }, ${storedUsername}`;

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
let dark = true;
const rootColors = document.querySelector(":root");
const arrowLeftEl = document.querySelector(".custom-arrow-left");
const circleEl = document.querySelector(".circle-link");

function darkMode() {
    arrowLeftEl.classList.add("hidden");
    circleEl.classList.toggle("switch");
    if (dark) {
        rootColors.style.setProperty("--primary", "white");
        rootColors.style.setProperty("--secondary", "black");
        meridiemEl.style.backgroundColor = "rgba(255, 255, 255, 0.581)";
        dark = false;
    } else {
        rootColors.style.setProperty("--primary", "black");
        rootColors.style.setProperty("--secondary", "white");
        meridiemEl.style.backgroundColor = "rgba(0, 0, 0, 0.581)";
        dark = true;
    }
}

// QUOTES START
const quotesEl = document.querySelector(".hero-quotes");

const quotesArray = [
    "We need much less than we think we need",
    "Don't let yesterday take up too much of today",
    "Whatever you are, be a good one",
    "Limit your 'always' and your 'nevers'",
    "Creativity is intelligence having fun",
    "If you tell the truth you don't have to remember anything",
    "There is no substitute for hard work",
    "If you look at what you have in life, you'll always have more",
    "Never regret anything that made you smile",
    "Every accomplishment starts with the decision to try",
];

let num = 0;

setInterval(changeQuote, 5000);

let mode = true;

function changeQuote() {
    num < 9 ? num++ : (num = 0);
    circleEl.classList.contains("switch")
        ? (backgroundImageEl.src = `img-dark/bg-${num}.jpg`)
        : (backgroundImageEl.src = `img/bg-${num}.jpg`);

    quotesEl.innerText = `"${quotesArray[num]}"`;
}
// TO DO LIST START
const toDoListEl = document.querySelector(".to-do-list");
const toDoOverlayEl = document.querySelector(".to-do-overlay");
const inputFieldEl = document.querySelector("#input-field");
const toDoContainerEl = document.querySelector("#to-do-container");

inputFieldEl.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        var listItem = document.createElement("li");
        var editInput = document.createElement("input");
        var deleteButton = document.createElement("button");
        var xButton = document.createElement("i");

        editInput.type = "text";
        editInput.value = inputFieldEl.value;
        editInput.classList.add("input-styling");

        xButton.classList.add("fa-solid");
        xButton.classList.add("fa-x");

        deleteButton.classList.add("btn");

        listItem.classList.add("list-styling");

        deleteButton.appendChild(xButton);

        listItem.appendChild(editInput);
        listItem.appendChild(deleteButton);

        toDoContainerEl.appendChild(listItem);

        inputFieldEl.value = "";

        deleteButton.addEventListener("click", () => {
            toDoContainerEl.removeChild(listItem);
        });
    }
});

function toDoOpen() {
    toDoListEl.classList.remove("hidden");
    toDoOverlayEl.classList.remove("hidden");
}
function toDoClose() {
    toDoListEl.classList.add("hidden");
    toDoOverlayEl.classList.add("hidden");
}
