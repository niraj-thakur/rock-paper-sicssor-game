console.log("Hello");

var MAX_GAME = 20;

var OPTIONS = {
	ROCK: 0,
	PAPER: 1,
	SCISSOR: 2
};

function getComputerOption(){
	
}

function handleChoiceSelection(selection){
	console.log("Option selected - ", selection, this);
}

function changeResultElement(value){
	var resultClassElements = document.getElementsByClassName("result");
	var resultElement = resultClassElements[0].childNodes[1];
	resultElement.innerHTML = value;
}

function changeScore(){
	
}
