
let randomNumber = Math.floor((Math.random() * 100) + 1);
let Playing = true;
let gameOver = false;
let Tries = 7;
let TriesTaken = 0;
let numberOfTries;


function guessNumber() {

	if (Playing) {

		let guess = document.querySelector('.inputs-Values').value;

		//bad inputs
		if (guess === 0 || guess === '' || guess > 100 || guess < 0) {

			document.querySelector('.final-output').textContent = 'Please enter a number between 1 and 100';

			//guess is to high
		} else if (guess > randomNumber) {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.final-output').textContent = 'Number is too high, try again';
			numberOfTries = document.querySelector('.Tries-output').textContent = 'Number of Tries: ' + Tries;

			//guess is to low
		} else if (guess < randomNumber) {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.final-output').textContent = 'Number is too low, try again';
			numberOfTries = document.querySelector('.Tries-output').textContent = 'Number of Tries: ' + Tries;

			//guess is correct
		} else {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.final-output').textContent = guess + ' is correct, You Win!!!';
			numberOfTries = document.querySelector('.Tries-output').textContent = 'It took you ' + TriesTaken + ' tries';
			Playing = gameOver;
		}

		//out of tries
		if (Tries === 0 && guess != randomNumber) {

			numberOfTries = numberOfTries = document.querySelector('.Tries-output').textContent = 'You Lose, the number was ' + randomNumber;
			document.querySelector('.final-output').textContent = '';
			Playing = gameOver;

		}
	}

}

//new game function
function newGame() {

	Tries = 7;
	TriesTaken = 0;
	randomNumber = Math.floor((Math.random() * 100) + 1);
	guess = document.querySelector('.inputs-Values').value = '';
	numberOfTries = document.querySelector('.Tries-output').textContent = 'Number of Tries: ' + Tries;
	document.querySelector('.final-output').textContent = 'Get a number between 1 and 100';
	Playing = true;
}

//keyboard exception
function keyBoardEvents(e) {

	if (e.keyCode === 13) {
		guessNumber();
	}

}


document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
document.addEventListener('keypress', keyBoardEvents);