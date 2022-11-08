const stopWatch = document.getElementsByClassName("stopWatch")[0];
const startButton = document.getElementsByClassName("start-btn")[0];
const pauseButton = document.getElementsByClassName("pause-btn")[0];
const continueButton = document.getElementsByClassName("continue-btn")[0];
const restartButton = document.getElementsByClassName("restart-btn")[0];

let hour=0, minute=0, second=0;
let intervalId;
let hourText;
let minuteText;
let secondText;

const startTime =()=>{
    second+=1;
    if (second==60) {
        second =0;
        minute+=1;
        if (minute==60) {
            minute=0;
            hour+=1;
        }
        
    }
    
     hourText = hour < 10 ? "0"+hour.toString() : hour;
     minuteText = minute < 10 ? "0"+minute.toString() : minute;
     secondText = second < 10 ? "0"+second.toString() : second;

    stopWatch.textContent = hourText +":"+minuteText+":"+secondText;
}

startButton.addEventListener("click",()=>{
    clearInterval(intervalId);
   intervalId = setInterval(startTime,1000);
})

pauseButton.addEventListener("click",()=>{
    clearInterval(intervalId);
})

continueButton.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);
})
restartButton.addEventListener("click",()=>{
    clearInterval(intervalId);
    hour=0,minute=0,second=0;
   intervalId = setInterval(startTime,1000);
   //stopWatch.textContent = hourText +":"+minuteText+":"+secondText;

})