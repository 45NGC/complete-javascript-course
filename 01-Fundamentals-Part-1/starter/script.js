// let js = "amazing";
// if (js === "amazing") alert("js is fun");

// //Operadores de javascript
// let x = 10;
// console.log("Valor inicial : " + x);

// x++;
// console.log("x++ : " + x);
// x--;
// console.log("x-- : " + x);
// x += 10;
// console.log("x += 10 : " + x);
// x -= 10;
// console.log("x -= 10 : " + x);
// x *= 5;
// console.log("x *= 5 : " + x);
// x **= 2;
// console.log("x **= 2 : " + x);

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// console.log(BMIMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// const age = 33;

// if(age >= 18){
// 	console.log(`You can drive`);
// }else{
// 	let yearsString = `years`;
// 	if(18 - age === 1){
// 		yearsString = `year`;
// 	} 
// 	console.log(`You can not drive, you will have to waight another ${18 - age} ${yearsString}`);
// }

// //EJERCICIO:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if(BMIJohn > BMIMark){
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }else{
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }

// if(BMIJohn === BMIMark){
//     console.log(`Both gentleman have the same BMI`);
// }


// const x = 'stringX';
// console.log(Number(x)); 	// = NaN (Not a Number)
// console.log(typeof(NaN));

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if(shouldDrive){
// 	console.log(`can drive`);
// }else{
// 	console.log(`can not drive`)
// }

// // EJERCICIO
// const scoreDolphins = (100+100+100)/3;
// const scoreKoalas = (100+100+100)/3;

// console.log(`dolphins score ${scoreDolphins}`);
// console.log(`koalas score ${scoreKoalas}`);

// if(scoreDolphins < 100 && scoreKoalas < 100){
// 	console.log(`Nobody wins the trophy`);
// }else{

// 	if(scoreDolphins === scoreKoalas){
// 		console.log(`Both win the trophy`);
// 	}else if(scoreKoalas > scoreDolphins){
// 		console.log(`Koalas win the trophy`);
// 	}else{
// 		console.log(`Dolphins win the trophy`);
// 	}

// } 

// //TERNARY OPERATOR (one line conditional)

// //Statement
// const age = 16;

// //Expression
// age > 18

// age >= 18 ? console.log(`I can drink`) : console.log(`I can not drink`);

// //The variable 'drink' will be true if age is equal or superior to 18
// const drink = age >= 18 ? true : false;

// console.log(`I can drink ${age > 18 ? `wine` : `water`}`);

// // EJERCICIO
// const bill = 25;

// /* Write your code below. Good luck! 🙂 */

// const tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
// console.log(`tip % : ${tipPercentage}`);

// const tip = (tipPercentage/100) * bill;

// console.log(`
// bill : ${bill} 
// tip % : ${tipPercentage}
// total : ${bill + tip}
// `);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);