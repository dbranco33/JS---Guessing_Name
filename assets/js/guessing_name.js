var target;
var guess_input_text;
var guess_input;
var correct_guess = false;
var number_of_guesses = 0;

//This function will generate a  random number
//and prompt the user for a guess.
function start_game(){
	//generates a random number between 1 and 100.
	//the number has no decimals, and it's stored in a variable.
	var random_number = Math.floor(Math.random()*101);

	//sets the 'target' value
	target = random_number;

	while(correct_guess == false){
		guess_input_text =
		prompt("I'm thinking about a number between 1 and 100.\n\n"+
					 "What's your guess for the number?")
		guess_input = parseInt(guess_input_text);
		number_of_guesses += 1;
		correct_guess = check_answer();
	}
}

//This function will compare the number generate by the computer
//and the value chosen by the user.
function check_answer(){

	var flag = false;

	if(isNaN(guess_input)){
		alert("You have not entered a number! Try again.");
	}
	else if(guess_input < 1 || guess_input > 100){
		alert("Please choose a number between 1 and 100.");
	}
	else if(guess_input < target){
		if(guess_input > target - 10){
			alert("Your number is smaller - But Close!!");
		}else{
			alert("Your number is too smaller");
		}
	}
	else if(guess_input > target){
		if(guess_input < target - 10){
			alert("Your number is bigger - But Close!!");
		}else{
			alert("Your number is too bigger");
		}
	}
	else if(guess_input ==  target){
		flag = true;
		alert("Congrats!!! You guess is correct :) ");
		alert("You took " + number_of_guesses + " guesses to win the game.")
		document.getElementById("alert_message").innerHTML = "<h2>Fell Free to Play Again.</h2>";
	}
	return flag;
}