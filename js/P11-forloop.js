//p11 For loops - lektion 09, Database basics

//varianter av enkel räknare, i är standardnamn
console.log("från 0 till under 5:")
for (let i= 0; i < 5 ; i++) {
  console.log(i);
}

console.log("0 till och med 5:")
for (let i = 0; i <= 5 ; i++) {
  console.log(i);
}

console.log("0 till 5, öka med 2. var slutar den då?")
for (let i = 0; i <= 5 ; i+=2) {
  console.log(i);
}

console.log("0 till under 5, öka med 0,5. var slutar den då?")
for (let i= 0; i < 5 ; i+=0.5) {
  console.log(i);
}

console.log("nedräknare 5 till 0:")
for (let i = 5; i >= 0 ; i--) {
  console.log(i);
}

console.log("nedräknare 5 till 0, minskar 2 i taget. var slutar den då?")
for (let i = 5; i >= 0 ; i-=2) {
  console.log(i);
}

// skapa en array
console.log("en räknare som  plockar data ur lista och visar i angiven ordning");
let array = ['Alpha', 'Beta', 'Gamma', 'Delta'];
for(let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}

console.log("Print 13 different random numbers between 1 and 6:");
let randomNumber = Math.floor(Math.random() * 6)+1;
console.log("testa slumpgenerator: " + randomNumber);

console.log("fel nedan! slumpgenerator utanför funktion skriver ut samma slumpade tal 13 ggr:");
let wrongRandom = Math.floor(Math.random() * 6)+1;
for (let i = 0; i < 13; i++) {
  console.log(wrongRandom);
}

//fungerande lösning nedan
console.log(": korrekt lösning");
for (let i = 0; i < 13; i++) {
  let slumpSiffra = Math.floor(Math.random() * 6)+1;
  console.log(": " + slumpSiffra);
}

console.log("Start at 1, multiply no of each iteration by 2, stop after 1024. consolelog each no.");
for (let multiNo = 1; multiNo <= 1024; multiNo = multiNo*2) {
  console.log(multiNo);
}

console.log("Function with 2 number parameters. Returns the first number to the power of the second number");
function powerOf(a1, b1){
  let result = a1 ** b1;
  return result;
}
console.log(powerOf(4,24))

//samma sak men med globala variabler, testa för att undvika namnkrock
const num1 = 3;
const num2 = 9;
console.log("Globala variabler 3 och 9");
function upphojdTill(a1, b1){
  let result = a1 ** b1;
  return result;
}
console.log(upphojdTill(num1,num2));
