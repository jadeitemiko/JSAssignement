//simulera ett spel

//ge några grundläggande variabelnamn
const playerName ="Link";
const ex ="!"
let playerAge = 11;
let rightHand = true;
let leftHand = false;
let rightEq ="sword";
let leftEq ="shield";
const Difficulty = "Easy" // Kan vara "Easy", "Medium", eller "Hard"

//"startskärm", visar inmatade värden
console.log("Welcome " + playerName + ex);
console.log(checkEligibility(playerAge));

//spelare måste vara minst 13 år gamla för äventyret
function checkEligibility(playerAge){
  if (playerAge <= 12) {
    return "At " + playerAge + " you are too young to join the adventure!"
  }
  else {
    return "At " + playerAge + " you are of age to join the adventure.";
  }
}

//nu ska spelaren åldras upp till att få spela, om de var för unga

playerAge = simTraining(playerAge);

function simTraining(age) {
  while (age < 13) {
    age = age + 1;
    console.log("You train diligently at home and turn " + age + " years old.");
  }
  return age;
}

//vapen i varsin hand
function Equip(rightHand, leftHand) {
  if (rightHand && leftHand) { //har ngt i både höger och vänster
    return ", armed with a " + rightEq + " and a " + leftEq + ex;
  }
  else if (rightHand && !leftHand) { //har ngt bara i höger
    return ", armed with a " + rightEq + ex;
  }
  else if (!rightHand && leftHand) { //har ngt bara i vänster
    return ", armed with a " + leftEq + ex;
  }
  else {
    return " - but beware, you are unarmed!";
  }
}

//var börjar äventyret?
function Location(Difficulty) {
  if (Difficulty === "Easy") {
    return "You start your adventure at home";
  }
    else if (Difficulty === "Medium") {
    return "You start your adventure in the beginners forest";
  } else {
    return "You start your adventure in the advanced dungeon";
  }
}

//skriv ut alla meddelanden och starta spelet
console.log(Location(Difficulty) + Equip(rightHand, leftHand));

