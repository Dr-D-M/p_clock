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
var isPaused = false;
var time = new Date();
var isPlayClicked = false;	

// session display click events
moreTimeSession.addEventListener("click", (e)=>{
	e.preventDefault();
	addTimeSession();
	console.log(e.target);
});

lessTimeSession.addEventListener("click", (e)=>{
	substractTimeSession();
	console.log(e.target);
});
workButton.addEventListener('click', (e)=>{
	updateCenterDisplay();
	console.log(e.target);
});

// break display click events
moreBreakTime.addEventListener("click", (e)=>{
addTimeBreak();
	console.log(e.target);
});
lessBreakTime.addEventListener("click", (e)=>{
	lessTimeBreak();
	console.log(e.target);
});

restButton.addEventListener('click', (e)=>{

	console.log(e.target);
});

//main display events 
play.addEventListener("click", (e) =>{
    e.preventDefault();
    startTime();
    console.log(e.target)
});

pause.addEventListener("click", (e) =>{
    e.preventDefault();

    console.log(e.target)
});

stop.addEventListener("click", (e) =>{
    e.preventDefault();

    console.log(e.target)
});

refresh.addEventListener("click", (e) =>{
    e.preventDefault();

    console.log(e.target)
});

//set session timing functions
var count = 0;
function addTimeSession(){

	Math.floor(count);
	count += 60;

	sessionDisplay.innerText = count++;
}

function substractTimeSession(){
	count -=60;
	sessionDisplay.innerText = count;
}
// set break timing functions
function addTimeBreak(minutes, seconds){
	count += 60;


	breakDisplay.innerText = count++;
}

function lessTimeBreak(){
	count -= 60;
	breakDisplay.innerText = count;
}

// updatte the display when "work" or "rest" button are pressed

function updateCenterDisplay(){
}

// start clock function

function startTime(){
	console.log('start!');
}




