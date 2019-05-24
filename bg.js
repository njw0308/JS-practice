const body = document.querySelector("body");

function handleImgLoad(){
    con
}

function paintImage(Imagenumber){
    const image = new Image();
    image.src = `images/${Imagenumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    
    const number = Math.floor(Math.random() *3) +1;
    return number;
}



function init(){
    const randomnumber = genRandom();
    paintImage(randomnumber);
}

init();