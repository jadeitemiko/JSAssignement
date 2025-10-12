let playerName;
let playerAge;

//läser in spelarens namn och start-ålder i globala variabler
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Förhindra att sidan laddas om när man skickar formuläret
  playerName = document.getElementById('playerName').value;
  playerAge = Number(document.getElementById('playerAge').value);
  //omvandlar formulärets svar till siffror som js kan tolka
});

// AdvName är återkommande använt på html-sidan. namePlace står för placeholder
const namePlace = document.querySelectorAll(".AdvName");
//kod för att uppdatera varje användning:
namePlace.forEach(element => {
  element.textContent = AdvName;
})

//Segment för ålderskontroll, med id playerAge och ageVerif på html-sidan
document.getElementById("playerAge").textContent = playerAge; //skriver aktuella åldern

//spelare måste vara minst 13 år gamla för att starta äventyret
function ageVerif(playerAge){
  if (playerAge <= 12) {
    document.getElementById("ageVerif").innerHTML += "At " + playerAge + " you are too young to join the adventure."
  }
  else {
    document.getElementById("ageVerif").innerHTML +=  "At " + playerAge + " you are of age to join the adventure.";
  }
}

//plockat från lärarens exempel
function createPTag(stringIn);
let para1 = document.createElement("p")


//nu ska spelaren åldras upp till att få spela, om de var för unga
playerAge = simTraining(playerAge);
function simTraining(age) {
  while (age < 13) {
    age = age + 1;
    console.log("You train diligently at home and turn " + age + " years old.");
  }
  return age;
}


//Lista över utrustning. equipList är id:et på html-sidan
const equipment = ["Sword", "Shield", "Spear", "Bow and Arrows"];
const ListOfEquip = document.getElementById("equipList");
const ulTemp = document.createElement("ul");
equipment.forEach(equipment => {
  let liTemp = document.createElement("li");
  liTemp.textContent = equipment;
  ulTemp.appendChild(liTemp);
})

ListOfEquip.appendChild(ulTemp);



/*
//arbeta med en paragraf text

let defin = document.getElementById("defin");


//räknare
let count = 0;
let countButt = document.getElementById("countButt"); // Knappen med ID="countButt"
let counterDisplay = document.getElementById("counterDisplay"); // P-taggen med ID="counterDisplay"
countButt.addEventListener("click", () => {
  count++; //öka räknaren
  counterDisplay.innerHTML = "Nu har du tryckt " + count + " ggr";
  console.log("Knappen har tryckts " + count + " gånger");
})

let refDiv = document.getElementById("wrapperDiv");
let tempPara = document.createElement("p");
tempPara.textContent = "Här upppstår ny text helt magiskt";
tempPara.classList.add("pClass");
refDiv.appendChild(tempPara);

*/

