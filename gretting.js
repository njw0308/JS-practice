const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS , text);
}

function handleSubmmit(event){
    event.preventDefault();
    const current_value = input.value;
    paintGreeting(current_value);
    saveName(current_value);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" , handleSubmmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser ===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();