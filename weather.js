const weather = document.querySelector(".js-weather");


const COORDS = 'coords';
const API_KEY =  ''; 
function saveCoords(latitude, longitude){
    localStorage.setItem(COORDS , JSON.stringify({latitude : latitude, longitude : longitude}));
}

function getWeather(lat , lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`).then(function(response){
        return response.json();
    }).then(function(json){
        const temper = json.main;
        const place = json.place;
        weather.innerText = `${temper} - ${place}`;
    });
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    saveCoords(latitude, longitude);
    getWeather(latitude , longitude);
}

function handleGeoError(){
    console.log("Can't access geo loaction");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS)
    if (loadedCords ===null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();