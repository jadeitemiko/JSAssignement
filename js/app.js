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

// övning P4Variables

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

minFunk(i + a);

console.log("=======");

//Implement a program that calculates the area of a circle using a number input
// for the radius and displays the result.

function calcCirc(radie) {
  let Area  = Math.PI * radie * radie;
  return Area;
}
const radie = 8;
const berArea = calcCirc(radie);
const avrunda = berArea.toFixed(2)
console.log("om radien är " + radie + " är arean av cirkeln " + avrunda);


//Implement a program that takes a number input and displays its negation.

const firstVal = 11;

function makeNeg(input) {
let negVal = -input;
return negVal;
}

let Negativt = makeNeg(firstVal);

console.log("om värdet " + firstVal + " ska skrivas negativt gör man " + Negativt);

/* Implement a program that calculates the BMI of a person using their
weight in kilograms and height in meters.
Display the BMI value.
för att kvadrera värde: console.log(2 ** 2);
 */

const vikt = 70;
const langd = 1.82;

function calcBMI(vikt, langd){
  let utrakn = vikt/(langd ** 2);
  return utrakn;
}

let BMI = calcBMI(vikt, langd);
const BMIround = Math.round(BMI);

console.log("BMI är vikt/längd^2. Om vikt är " + vikt + " och höjden är " + langd + " är BMI (avrundat): " + BMIround);

/* Implement a program that calculates the length of the hypotenuse of a
right triangle using the lengths of the other two sides as inputs. Display the result.
 */

const triA = 3;
const triB = 4;

function calcC2(triA, triB) {
  let triC2 = (triA ** 2) + (triB ** 2);
  return triC2;
}

let hypo = Math.sqrt(calcC2(triA, triB));

console.log("Pythagoras sats är a2 + b2 = c2. Om a är " + triA + " och b är " + triB + " är c " + hypo);

//förenkla koden enligt förslag från AI
function beraknHypotenusa(triA, triB) {
  let hypo = Math.sqrt((triA ** 2) + (triB ** 2));
  return hypo;
}

console.log("Förenklad kod! Pythagoras sats är a2 + b2 = c2. " +
  "Om a är " + triA + " och b är " + triB + " är c " + beraknHypotenusa(triA, triB));

/* Implement a program that takes a number input representing seconds
and converts it to minutes and remaining seconds, then displays the result.
 */

const allTime = 111;

function hMin(allTime) {
  const  minutes = Math.floor(allTime/60);
  return minutes;
}

function hSek(allTime) {
  const sec = allTime % 60;
  return sec;
}

const m2 = hMin(allTime);
const s = hSek(allTime);
console.log(allTime + " sekunder blir " + m2 + " minuter och " + s + " sekunder.");

console.log("==========")

//sätt in siffror i en sträng

const string = " green bottles hanging on the wall";
let numberofBottles = 10;

console.log(numberofBottles + string + ". " + numberofBottles + string);
--numberofBottles;
const string2 = "And if one green bottle should accidentally fall, there will be " + numberofBottles; + "."
console.log(string2 + string);

console.log("==========")

//övning P6Types - förenkla koden från P4Variables övningen

let raknVarde = 10;
const green0 = " green bottles hanging on the wall. "
const green1 = raknVarde + green0;
const green2 = "And if one green bottle should accidentally fall, there will be " + --raknVarde;
console.log(green1 + green2 + green0);

//experimentell for-loop - Gemini hjälper här

const antFlask = 3;
const gron0 = " green bottles hanging on the wall. "
const gron1 = antFlask + green0;
const gron2 = "And if one green bottle should accidentally fall, there will be ";

for (let Bott = antFlask; 0 < Bott; Bott--) {
  if(Bott !== antFlask) {
    console.log(gron2 + Bott + gron0);
  }
  console.log(Bott + gron1 + Bott + gron1);
}

//boolean dvs sant/falskt

let bool = true;
console.log(bool);
console.log(!bool);

const age = 24;
const birthyear = 2002;

console.log("Stämmer ålder och år mot kontrollen:");
console.log(age == 26 && birthyear == 2002);
console.log("Stämmer ålder ELLER år mot kontrollen:");
console.log(age == 26 || birthyear == 2002);

/*
> större än
>= större eller lika med
< är mindre än
<= mindre än eller lika med
== lika med
!= ej lika med
 */

console.log( 10 > 9); //10 är större än 9 dvs true
console.log( 10 < 10); //10 är inte STÖRRE än 10 dvs får vi false
console.log( 10 >= 10); //10 är större eller lika med 10 dvs får vi sant

//övning P7 boolean

const birthYear = 2030; //födelseår
const currentYear = new Date().getFullYear();
const Age = currentYear - birthYear;
let isChild = Age >= 0 && Age <= 12;
let isTeen =  Age >=13 && 17 >= Age;
let isAdult = Age >= 18;
console.log("Är någon som är " + Age + " barn, tonåring eller vuxen?");
console.log("Barn: " + isChild);
console.log("Tonåring: " + isTeen);
console.log("Vuxen: " + isAdult);

//testar själv en if-loop för att kontrollera om korrekt ålder.
console.log("Rimlighetskontroll!")
const bYear = 2030; //födelseår
const cYear = new Date().getFullYear();
const Alder = cYear - bYear;
let isBarn = Alder >= 0 && Alder <= 12;
let isTon =  Alder >=13 && 17 >= Alder;
let isVux = Alder >= 18;
console.log("Är någon som är " + Alder + " barn, tonåring eller vuxen?");
console.log("Barn: " + isBarn);
console.log("Tonåring: " + isTon);
console.log("Vuxen: " + isVux);
if (Alder >= 18 {
  
})

//koden för datum
const idag = new Date();
const YY = idag.getFullYear();
const MM = idag.getMonth()+1; //js börjar räkna från 0, så alltid plus ett
const DD = idag.getDate();
console.log("Dagens datum i varianter: " + YY + "-" + MM + "-" + DD);

