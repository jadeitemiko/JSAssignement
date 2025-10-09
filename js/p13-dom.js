console.log("Testing testing");

//skapar ny text ur js på html-sidan
let p2 = document.createElement("p");
p2.textContent = "Denna text är genererad med JavaScript";
document.body.appendChild(p2);

//skapa en knapp som "räknar i konsolen" hur många knapptryckningar som gjorts
const button = document.getElementById("testknapp");
button.addEventListener("click", () =>{
  console.log("I got clicked");
});

//skapa en knapp som byter namn på texten
const button2 = document.getElementById("testknapp2");
button2.addEventListener("click", () => {
  paraGraph.innerHTML = "Hejsan klassen!";
});

//arbeta med en paragraf text
let defin = document.getElementById("defin");

/* html-koden jag försöker bearbeta
  <form action="/skicka-data" method="GET">
  <label for="input-text">Vad heter du?</label><br>
  <input type="text" id="input-text" name="UserName">
  <button type="submit">Skicka</button></h2>
 */

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

//skapa en referens till HTML elementet medd ID
let = documnt.getElementById("omslDiv");

//skapa ett p-tag HTML element
let tempPara = document.createElement("p");
