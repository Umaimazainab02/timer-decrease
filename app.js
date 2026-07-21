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




let clock =document.getElementById("clockbtn")