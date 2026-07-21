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