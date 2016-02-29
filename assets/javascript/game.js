$(document).ready(function () {

	// Score
	var sw = 0;
	var sl = 0;

	var guess_value = Math.floor(Math.random() * 120);
	var cred = (Math.floor(Math.random() * 12));
	var cblue = Math.floor(Math.random() * 12);
	var cyellow = Math.floor(Math.random() * 12);
	var cgreen = Math.floor(Math.random() * 12);

	var gems = [cgreen,cred,cblue,cyellow];
	console.log[gems[0]];

	var total_score= 0;
		console.log("red value " + cred);
		console.log("blue Value " + cblue);
		console.log("green Value " + cgreen);
		console.log("yellow Value " + cyellow);

		console.log("computer guess "+guess_value);
		console.log("total score "+total_score);
		console.log(sw)
		console.log(sl)

			$('#blue').on("click",function(){
		total_score=total_score+cblue;
		console.log(total_score);
		$("your_score").append(total_score);

			if (total_score==guess_value){
				console.log("you win!!!");
				} else if (total_score>guess_value){
				console.log("LOSER!!");
				};

		});
		$('#red').on("click",function(){
		total_score=total_score+cred;
		console.log(total_score);
		$("your_score").append(total_score)
		
			if (total_score==guess_value){
				console.log("you win!!!");
				} else if(total_score>guess_value){
				console.log("LOSER!!");
			};
		});

		$('#green').on("click",function(){
		console.log(cgreen)
		total_score=total_score+cgreen;
		console.log(total_score);
		$("your_score").append(total_score)		
		
			if (total_score==guess_value){
				console.log("you win!!!");
		
			} else if(total_score>guess_value){
				console.log("LOSER!!");
			};			
		});

		$('#yellow').on("click",function(){
		total_score=total_score+cyellow;
		console.log(total_score);
		$("your_score").append(total_score)

			if (total_score==guess_value){
				console.log("you win!!!");
				} else if (total_score>guess_value){
				console.log("LOSER!!");
			};
			
		});

		$("#game_value").append(guess_value);
		$("your_score").append(total_score);

		
});