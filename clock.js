const clockcontainer = document.querySelector(".js-clock");
const clocktitle = clockcontainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktitle.innerText= `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}:${seconds <= 9 ? `0${seconds}` : seconds}` 
}

function init(){
    getTime();
    setInterval(getTime,  1000);
}
init()