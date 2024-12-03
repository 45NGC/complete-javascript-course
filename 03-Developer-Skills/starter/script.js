// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const test = [12, 5, -5, 0, 4];

const printForecast = function (forecast) {

	const individualStrings = [];

	for (let i = 0; i < forecast.length; i++) {

		individualStrings.push(`... ${forecast[i]} ºC in ${i + 1} days `);

		if (i === forecast.length - 1) individualStrings.push(`...`);

	}

	let finalString = ``;

	for (let i = 0; i < individualStrings.length; i++) {
		finalString += individualStrings[i];
	}

	console.log(finalString);

}

printForecast(test);
