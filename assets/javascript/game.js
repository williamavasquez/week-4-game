$(document).ready(function () {

	// global variables declrared to not loose them when the scrip runs

	// score of the game
	 	wins = 0;
		loss = 0;

	//the computer picks a random number between 1 and 120 and prints it on the screen
	guessValue = Math.floor(Math.random() * (120-19+ 1) + 19);
	$('#gameValue').html(guessValue);

// the computer picks a random number for the gems
	cred = (Math.floor(Math.random() * 12));
	cblue = Math.floor(Math.random() * 12);
	cyellow = Math.floor(Math.random() * 12);
	cgreen = Math.floor(Math.random() * 12);
	var valueAdded = 0;

	totalScore= 0;
	// all the variables are added into an array for easier calling
	gems = [cblue,cred,cgreen,cyellow];

		console.log("red value " + cred);
		console.log("blue Value " + cblue);
		console.log("green Value " + cgreen);
		console.log("yellow Value " + cyellow);

		console.log("computer guess "+guessValue);
		console.log("total score "+totalScore);
		console.log(wins)
		console.log(loss)

	// when the player clicks a gem they will add this value to the score 
	$(".gems").click(CheckValue);

function CheckValue(){
// This grabs the value of the gem you picked
	valueAdded = ($(this).data('gem'));
	valueAdded = parseInt(valueAdded);
	valueAdded = gems[valueAdded]

// adds the variable and imputs it to your total score
		totalScore = totalScore+valueAdded;
		$(your_score).html(totalScore);

// here we evaluate the result of each click, if we are over, under or equal to what the computer chose
		if (totalScore>guessValue){
			loss++;
			$("#loss").html("Losses: "+loss)
			clearEvent();
			} else if(totalScore==guessValue){
				wins++;
				$("#win").html("Win: "+wins);
				clearEvent();
	};
};

// This function clears the divs and the variable as well as picks a new number
	function clearEvent(){
		alert("New GAME");
		totalScore=0;
		guessValue=Math.floor(Math.random() * (120 - 19 + 1)) + 19);
		$('#gameValue').html(guessValue);
		$('#your_score').html('0');
	}
});