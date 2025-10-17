//innan instruktioner är gammalt, bara för referens
/*
//kopierar enklaste array + slumpgen ur P11. sitter inte ihop
console.log("en räknare som  plockar data ur lista och visar i angiven ordning");
let arrayABCD = ['Alpha', 'Beta', 'Gamma', 'Delta'];
for(let i = 0; i < arrayABCD.length; ++i) {
  console.log(arrayABCD[i]);
}

console.log("slumpar fram värde mellan 1-6 och skriver ut dem 6 ggr");
for (let i = 0; i < 6; i++) {
  let slumpSiffra = Math.floor(Math.random() * 6)+1;
  console.log(slumpSiffra);
} */

/* Uppgift P12:
Output: I will roll 10 000 numbers between 0 and 10:
Output: I rolled 0 a total of 987 times.
Output: I rolled 1 a total of 1002 times.
Output: I rolled 2 a total of 998 times.

Instructions: Create an array to count the occurrences of random numbers
Roll 10 000 times for a number between 0 and 10 by using: Math.floor(Math.random()*10)
And count the number of times that you have rolled that specific number. Print result to console. */

//globala variabler, antal framslumpade tal + tom array
// testar med lågt värde på tenK, öka till 10 000 när klart
let tenK = 10000;
let rollCount = [
  {id: 0, numberofRolls: 0},
  {id: 1, numberofRolls: 0},
  {id: 2, numberofRolls: 0},
  {id: 3, numberofRolls: 0},
  {id: 4, numberofRolls: 0},
  {id: 5, numberofRolls: 0},
  {id: 6, numberofRolls: 0},
  {id: 7, numberofRolls: 0},
  {id: 8, numberofRolls: 0},
  {id: 9, numberofRolls: 0},
  {id: 10, numberofRolls: 0},
];

//slumptalsgenerator 0-10
for (let i = 0; i < tenK; i++) {
  let D10 = Math.floor(Math.random() * 11);
  rollCount[D10].numberofRolls++; //förkortad syntax! betyder samma som "rollCount[D10] = rollCount[D10] + 1;, dvs ökar nuvarande värde med 1"
  //console.log("Slag: " + D10); konsol-loggar varje slag. obs, lite farlig om 10 000 rullningar
}

console.log("Output: I will roll " + tenK + " numbers between 0 and 10:");

//skriv ut när du vet att du vill ha en viss position ur arrayen (t.ex. det första, här 0) men inte vad det är
let resultZero = rollCount.find(item => item.id === 0);
let resultOne = rollCount.find(item => item.id === 1);
let resultFive = rollCount.find(item => item.id === 5);

console.log("Output: I rolled " + resultZero.id + " a total of " + resultZero.numberofRolls + " times.");
console.log("Output: I rolled " + resultOne.id + " a total of " + resultOne.numberofRolls + " times.");
console.log("Output: I rolled " + resultFive.id + " a total of " + resultFive.numberofRolls + " times.");
