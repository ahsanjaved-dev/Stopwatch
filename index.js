const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let Elipsetime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - Elipsetime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}


function stop(){
    if(isRunning){
        clearInterval(timer);
        Elipsetime = Date.now() - startTime;
        isRunning = false;
    }
}


function reset(){
    clearInterval(timer);
    startTime = 0;
    Elipsetime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){
    const currentTime  = Date.now();
    Elipsetime = currentTime - startTime;
    
    let hours = Math.floor(Elipsetime / (1000 * 60 * 60));
    let minutes = Math.floor(Elipsetime / (1000 * 60) % 60);
    let Seconds = Math.floor(Elipsetime / 1000 % 60);
    let MiliSec = Math.floor(Elipsetime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    Seconds = String(Seconds).padStart(2,0);
    MiliSec = String(MiliSec).padStart(2,0);

    display.textContent = `${hours}:${minutes}:${Seconds}:${MiliSec}`;
}