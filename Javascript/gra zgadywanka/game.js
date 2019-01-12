var secretNumber = 4;

var guess = Number(prompt("guess a number"));

if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT");
}

else if(guess > secretNumber) {
	alert("THE NUMBER IS TOO HIGH");
}

else {
	alert("THE NUMBER IS TOO LOW");
}