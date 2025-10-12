function testFunction(inputParam) {
  console.log(inputParam);
}

testFunction("Hello everyone!");
//alternativt kan man skapa en variabel och använda när funktionen kallas upp
let string = "Hej allihop!";
testFunction(string);

/*
//wrapperDiv är id:et på html-sidan
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
const divWrapper = document.getElementById("wrapperDiv");
const ulTemp = document.createElement("ul");
fruits.forEach(fruit => {
  let liTemp = document.createElement("li");
  liTemp.textContent = fruit;
  ulTemp.appendChild(liTemp);
})

divWrapper.appendChild(ulTemp);

const remove = document.getElementById("para4");
  removeRef.remove();
*/
  /* ==== P14- STRETCH, API PREVIEW ====

  fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`)
  .then(response => response.json()
  .then(data =>

   */

//vi deklarerar en tom variabel
let matResult;

//fördröjd hämtning. utan await blir det undefined pga scriptet körs klart innan hämtningen färdig
await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  //hämtar från API:n och gör den läsbar av JS med .json
  //res = förkortning för respons, kan vara annat ord men detta standard
  .then(res => res.json())
  //spara datan som vi fetchar från API med kommandot nedan
  .then(data => matResult = data);

// följande visar Fetch funkar, men ger alldeles för mycket kod:
// console.log(matResult);
// Men vi såg i allt det nycklar vi var intresserade av, bl.a. "meals"
matResult.meals.forEach(meal => console.log(meal.strMeal));
//strMeal = ger oss string som är variabeln "meals" namn

