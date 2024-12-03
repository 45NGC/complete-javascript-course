'use strict';

const hiddenNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(hiddenNumber);

const changeMessage = function (text) {
	document.querySelector(`.message`).textContent = text;
}

const checkButton = document.querySelector(`.check`);

checkButton.addEventListener(`click`, function () {

	const guess = Number(document.querySelector(`.guess`).value);

	console.log(guess, typeof guess);

	if (!guess) {
		changeMessage(`NOT A NUMBER`);
	} else if (guess === hiddenNumber) {
		changeMessage(`CORRECT`);
	} else {
		changeMessage(`INCORRECT`);
	}

});
