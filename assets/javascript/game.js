$(document).ready(function () {

	// global variables declrared to not loose them when the scrip runs

	// score of the game
	 	wins = 0;
		loss = 0;

	//the computer picks a random number between 1 and 120 and prints it on the screen
	guessValue = Math.floor(Math.random() * 120);
	$('#gameValue').html(guessValue)

// the computer picks a random number for the gems
	cred = (Math.floor(Math.random() * 12));
	cblue = Math.floor(Math.random() * 12);
	cyellow = Math.floor(Math.random() * 12);
	cgreen = Math.floor(Math.random() * 12);

	total_score= 0;
	// all the variables are added into an array for easier calling
	gems = [cblue,cred,cgreen,cyellow];

		console.log("red value " + cred);
		console.log("blue Value " + cblue);
		console.log("green Value " + cgreen);
		console.log("yellow Value " + cyellow);

		console.log("computer guess "+guessValue);
		console.log("total score "+total_score);
		console.log(wins)
		console.log(loss)

	// when the player clicks a gem they will add this value to the score 
	$(".gems").click(gemSelect)


	function gemSelect() {
		valueAdded = ($(this).data('gem'));
		valueAdded = parseInt(valueAdded);
		valueAdded = gems[valueAdded]
		console.log(valueAdded+valueAdded);

		if (valueAdded ==guessValue) {
			wins++;
			alert("You won!");
			clearEvent();
		}
		total_score = total_score+valueAdded;
		$(your_score).html(total_score);
	};


	function clearEvent(){
		total_score=0;
		guessValue=Math.floor(Math.random() * 120);
	}
});