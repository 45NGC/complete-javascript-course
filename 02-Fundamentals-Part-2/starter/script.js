'use strict'


// // Function declaration
// function calcAge1(birthYear){
// 	return 2024 - birthYear;
// }
// const age1 = calcAge1(2001);


// // Function expression
// const calcAge2 = function(birthYear){
// 	return 2024 - birthYear;
// }
// const age2 = calcAge2(2001);

// // Arrow function (ideal for one-line functions)
// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(2001);


// const calcRetirement = (birthYear, firstName) =>{
// 	const age = 2024 - birthYear;
// 	const retirement = 65 - age;

// 	//ternary operator
// 	const yearString = retirement > 1 ? `years` : `year`; 

// 	return `${firstName} retires in ${retirement} ${yearString}`
// }

// const age4 = calcRetirement(1960, `Nico`);
// console.log(age4);

// EJERCICIO

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins === avgKoalas){
//         console.log(`No team wins...`);
//     }else{
        
//         if(avgDolphins > avgKoalas){
//             console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//         }else{
//             console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//         }
        
//     }
// }

// const scoreDolphins = calcAverage(44, 44, 44);
// const scoreKoalas = calcAverage(45, 44, 44);

// checkWinner(scoreDolphins, scoreKoalas);

// EJERCICIO
/* Write your code below. Good luck! 🙂 */

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

//// Arrow function version
//// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(total);

// Objects

// const nico = {
//     firstName : `Nicolás`,
//     lastName : `Gómez`,
//     age : 2024 - 2001,
//     job : `developer`,
//     friends : [`Andrés`, `Julián`, `Joel`]
// };

// const nameKey = `Name`;

// console.log(nico[`first${nameKey}`]);
// console.log(nico.firstName);

// nico.location = `España`;
// nico[`instagram`] = `nicooogomez_`;

// console.log(nico);

// // nico has 3 friends, and his best friend is called Andrés
// const sentence = `${nico.firstName} has ${nico.friends.length} friends, and his best friend is called ${nico.friends[0]}`;
// console.log(sentence);

// EJERCICIO

// const mark = {
//     fullName : `Mark Miller`,
//     mass : 78,
//     height : 1.69,

//     calcBMI : function(){
//         return this.bmi = this.mass / this.height ** 2;
//     }
// };

// const john = {
//     fullName : `John Smith`,
//     mass : 92,
//     height : 1.95,

//     calcBMI : function(){
//         return this.bmi = this.mass / this.height ** 2;
//     }
// };

// console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);


// for loop :
// for(let i = 1; i <= 10; i++){
//     console.log(`index of the for loop : ${i}`);
//     if(i === 9) break;
//     if(i != 3) continue;
//     console.log(`continue index ${i}`);
// }
// console.log(`FINISH`)
// with the 'break' keyword we stop the loop
// with the 'continue' keyword in this case if the index is different than 3 then we end 
// that loop iteration and let the next one come.

// while loop:

// we are going to throw a dice until we get a 6
// let dice = 0;
// while(dice !== 6){
//     dice = Math.trunc(Math.random() * 125) + 1;
//     console.log(dice);
// }

// EJERCICIO

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function (arr) {
    let total = 0;
    if(!Array.isArray(arr)){
        console.log(`The value 'arr' is not an Array`);
        return 0;
    }else{
        for(let i = 0; i < arr.length; i++){
            total += arr[i]; 
        }
        console.log(total);
        return total/arr.length;
    }
}


const averagePrice = calcAverage(totals);
console.log(`The average price of the restaurant is ${averagePrice}`);

const averagePriceNoTip = calcAverage(bills);
console.log(`The average price of the restaurant without tip is ${averagePriceNoTip}`);




















