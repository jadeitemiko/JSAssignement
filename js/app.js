/*
Author: Gabriella
Date: 2025-10-01
gabriella.gomez (snabela) medieinstitutet.se
 */
let stringexample;

console.log (
  "Hello World!"
);

const examplestring = "Hello Class this is an example of constants ";
console.log(examplestring);

let carName;
// value of carName is undefined
carName = "Volvo"
// value of carName is now Volvo

stringexample = 1984;

console.log(stringexample);

console.log(carName);

let countValue = 10;
const sats = "green bottles hanging on the wall";
const sats2 = "and if one green bottle should accidentally fall, there will be";
console.log(countValue);
console.log (sats + " " + countValue);
console.log (sats2);
console.log (--countValue);
console.log (sats);
console.log (sats2);
console.log(countValue-2);

/*
PEMDAS - hur JS prioriterar matematiska funktioner
Parentheses first
Exponents
Multiplication and Division
Addition and Subtraction
 */

let gold = 50;
++gold;
console.log(gold);

console.log("---------");

//72 km/h till 20 m/s egen lösning//
let val1 = 72;
console.log(val1 + " km/h = " + val1/3.6 + "m/s");

//72 km/h till 20 m/s ai lösning//
const speedKmh =72;
const speedMs = speedKmh/3.6;
console.log(speedMs);

//testa samma för minuter till sekunder//
const tidMin = 3;
const tidSek = tidMin*60;
console.log(tidSek);

//inputta 2 nummer och visa deras division som resultat//
let div1 = 11;
let div2 = 4
console.log (div1/div2);

//räkna ut remaindern of dividing 11/4 numbers and display result med modulo//
let kvot1 = div1 % div2;
console.log (kvot1 + " uträknad med modulo");

//testa avrunding med en annan funktion//
const kvot2 = Math.round(div1/div2);
console.log (kvot2 + " avrundad");

console.log (Math.round (div1/div2) + " här är allt direkt i konsolloggen");

console.log("---------");

//nu skapar vi funktioner
let i = 10;
let a = 12;
function minFunk(input) {
  console.log(input);
}

minFunk(i);
minFunk(a);




