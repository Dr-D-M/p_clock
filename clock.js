// displays 
const sessionDisplay = document.querySelector('.sessionDisplay');
const breakDisplay = document.querySelector('.breakDisplay');
const centerDisplay = document.querySelector('.workDisplay');
// button for session timer
const moreTimeSession = document.querySelector('#sessionMore');
const lessTimeSession = document.querySelector('#sessionLess');
const workButton = document.querySelector('#work');

// button for break timer
const moreBreakTime = document.querySelector('#breakMore');
const lessBreakTime = document.querySelector('#breakLess');
const restButton = document.querySelector('#rest');
//main display buttons
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const refresh = document.querySelector('#refresh');


// variables 
/*var isPaused = false;
var time = new Date();
var isPlayClicked = false;*/	

// session display click events
moreTimeSession.addEventListener("click", (e)=>{
	e.preventDefault();
	addTimeSession();
	
});

lessTimeSession.addEventListener("click", (e)=>{
	substractTimeSession();
	
});
workButton.addEventListener('click', (e)=>{
	setTimerWork();
	
});

// break display click events
moreBreakTime.addEventListener("click", (e)=>{
    addTimeBreak();
	
});
lessBreakTime.addEventListener("click", (e)=>{
	lessTimeBreak();
	
});

restButton.addEventListener('click', (e)=>{
	setTimerBreak() || timerBreak();
	
	
});

//main display events 
play.addEventListener("click", (e) =>{
    e.preventDefault();
    timer();
    
});

pause.addEventListener("click", (e) =>{
    e.preventDefault();
    pauseTime();
    
});

stop.addEventListener("click", (e) =>{
    e.preventDefault();
    stopTime();
});

refresh.addEventListener("click", (e) =>{
    e.preventDefault();
    refreshTime();
});

/*Make the clock work*/
let countdown; 
 
function timer(secondsCounter){
	clearInterval(countdown);
	secondsCounter = 1500;
	const now = Date.now();
	const then = now + secondsCounter * 1000;
	//displayTime(secondsCounter);

countdown = setInterval(() => {
	const secondsLeft = Math.round((then - Date.now()) / 1000);

   displayTime(secondsLeft);
	
}, 1000);
}

function timerBreak(secondsCounter){
	clearInterval(countdown);
    secondsCounter = 300;
    const now = Date.now();
    const then = now + secondsCounter * 1000;

    countdown = setInterval(() =>{
    	const secondsBehind = Math.round((then - Date.now()) / 1000);
displayTimeBreak(secondsBehind);
    }, 1000);
}


function displayTimeBreak(secondsCounter){
	const minutes = Math.floor(secondsCounter / 60);
	const secondsBreak = secondsCounter % 60;
	let screen = `${minutes}:${secondsBreak < 10 ? '0' : ''}${secondsBreak}`;
     centerDisplay.textContent = screen;
     document.title = screen;
     centerDisplay.textContent = screen;

     if(screen == '0:01'){
		alert('Get To Work Bitch!!');
	}else{
		return;
	}

}

function displayTime(secondsCounter){
	
	const minutes = Math.floor(secondsCounter / 60);
	const remainingSeconds = secondsCounter % 60;
	const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    centerDisplay.textContent = display;
    
    
    document.title = display;

    if(display == '0:01'){
    	alert('This should be working, sweetie');
    }
    
	//console.log({minutes, remainingSeconds});
}



// updatte the display when "work" or "rest" button are pressed

function setTimerWork(){
const seconds = parseInt(this.time);
refreshTimeWork(seconds);
}
function setTimerBreak(){
	const seconds = parseInt(this.time)
	refreshTimeBreak(seconds);
}



function pauseTime(){
countdown = clearInterval(countdown);

    if(pause){
    	console.log('fuck!');
    }
	
}

function stopTime(secondsCounter) {
   
    countdown = clearInterval(countdown);
	console.log('stopped');
}
function refreshTimeBreak(secondsCounter){
	secondsCounter = 300;

	let mins = Math.floor(secondsCounter / 60);
	let secs = secondsCounter % 60;
	let refresherDisplay = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

	centerDisplay.textContent = refresherDisplay;
	console.log("take a break, man");

}
function refreshTimeWork(secondsCounter) {
	secondsCounter = 1500;

	let mins = Math.floor(secondsCounter / 60);
	let secs = secondsCounter % 60;
	let refresherDisplay = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

	centerDisplay.textContent = refresherDisplay;

	
	console.log('new time!');
}

function refreshTime(secondsCounter){
	secondsCounter = 1500;

	let mins = Math.floor(secondsCounter / 60);
	let secs = secondsCounter % 60;
	let refresherDisplay = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

	centerDisplay.textContent = refresherDisplay;

	
	console.log('refresh the clock');
}


