var setSession = document.querySelector('.sessionDisplay');
var setBreak = document.querySelector('.breakDisplay');
const mainDisplay = document.querySelector('.workDisplay');
const moreTime = document.querySelectorAll('#more');
const lessTime = document.querySelectorAll('#less');
const startWork = document.querySelector('#work');
const rest = document.querySelector('#rest');

const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const refresh = document.querySelector('#refresh');

var isPaused = false;
var time = new Date();
var isPlayClicked = false;

play.addEventListener("click", (e) =>{
	e.preventDefault();
	if(isPlayClicked === false){
		startTimer(displayToSec());
	}
	isPlayClicked = true;
	
});

stop.addEventListener('click', (e) =>{
	stopTimer();
	console.log(e.stop)
});
pause.addEventListener('click',(e)=>{
	e.preventDefault();
	pauseTimer();
});
refresh.addEventListener('click', (e)=>{
	resetTimer();
});


function startTimer(duration){
	var offset = 0;
	time = new Date();
	isPaused = false;
	var interval = setInterval(function(){
		if(!isPaused){
			var milisec = offset +(new Date()).getTime() - time.getTime();
			secToDisplay(duration - parseInt(milisec / 1000));

			if(duration - parseInt(milisec / 1000) < 0){
				switchSession();
				clearInterval(interval);
			}
		}else{
			clearInterval(interval);
		}
	}, 10);
}


function stopTimer(){
	isPaused = true;
	isPlayClicked = false;
	if(work.textContent == "work!"){
		startTimer();
	}else{
		return 0;
	}
}

function resetTimer(){
	isPaused = true;
	isPlayClicked = false;
}

function pauseTimer(){
	isPaused = true;
	isPlayClicked = false;
}
function secToDisplay(totalSeconds){
	var minutes = Math.floor(totalSeconds / 60);
	var seconds = totalSeconds % 60;

	minutes = minutes < 10 ? "0" + minutes  : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	mainDisplay.textContent = minutes + ":" + seconds;
}


function displayToSec(){
	var time = (mainDisplay.textContent).split(":");
	var minutes = parseInt(time[0]);
	var seconds = parseInt(time[1]);
    
    var totalSeconds = minutes * 60 + seconds;
    return totalSeconds;
}

function switchSession(){
	
}

function clearInterval(){

}

function setInterval(){

}

