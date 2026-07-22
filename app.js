let timerbtn = document.getElementById("timer");
let clickbtn = document.getElementById("button");

clickbtn.addEventListener("click", function () {

    let timer = 10;

    timerbtn.innerText = timer;

    let interval = setInterval(function () {
        timer--;
        timerbtn.innerText = timer;

        if (timer === 0) {
            clearInterval(interval);
        }

    }, 1000);

});


let currentyear = document.getElementById("currentyear");
let yearbtn = document.getElementById("yearbtn");

yearbtn.addEventListener("click", function () {
    let date = new Date();
    document.getElementById("currentyear").innerText = date.getFullYear();

    ;
});


let currentdate = document.getElementById("currentdate");
let datebtn = document.getElementById("datebtn");

datebtn.addEventListener("click", function () {
    let date = new Date();
    document.getElementById("currentdate").innerText = date.toLocaleDateString();

    ;
});

let currentmonth = document.getElementById("currentmonth");
let monthbtn = document.getElementById("monthbtn");

monthbtn.addEventListener("click", function () {
    let date = new Date();
    document.getElementById("currentmonth").innerText = date.getMonth() + 1;

    ;
});


let currentday = document.getElementById("currentday");
let daybtn = document.getElementById("daybtn");

daybtn.addEventListener("click", function () {
    let date = new Date();
    document.getElementById("currentday").innerText = date.getDay();

    ;
});


let greeting = document.getElementById("greeting");
let date = new Date();
let hours = date.getHours();
if (hours >= 5 && hours < 12) {
    greeting.innerText = "Good morning"
}
else if (hours >= 12 && hours < 17) {
    greeting.innerText = "Good afternoon"
}
else if (hours >= 17 && hours < 21) {
    greeting.innerText = "Good evening"
}
else {
    greeting.innerText = "Good Night 🌙";
}




let clock = document.getElementById("clock");
let clockbtn = document.getElementById("clockbtn");

clockbtn.addEventListener("click", function () {

    function showTime() {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

    showTime();
    setInterval(showTime, 1000);

    clockbtn.disabled = true;
});





let daybtn1 = document.getElementById("daybtn1");
let showday1 = document.getElementById("showday1");

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

daybtn1.addEventListener("click", function () {
    let date = new Date();
    let currentDay = date.getDay();

    showday1.innerText = days[currentDay];
});
