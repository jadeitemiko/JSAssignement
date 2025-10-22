/*
https://www.themealdb.com/api.php

Using array methods to answer/print all of the following from the fetched data:
○ Print the first 5 names of the meals in alphabetical order (print name only
not the whole object)
i. Tips: use list method .sort()and then inside the sort method use the
following syntax to compare the meals names (a, b) =>
a.strMeal.localeCompare(b.strMeal))
 */

/*
FÖRKLARINGSMALL FRÅN SITE
fetch(url)
  .then(promise) {
  //gör ngt med det du hämtar
})
*/

//Enkelt exempel som skriver ut "{"success":"true"}
fetch('https://reqbin.com/echo/get/json', {
  method: 'get',
    headers: {
      Accept: 'application/json',
    },
})
  .then(res => res.json())
  .then(response => console.log(JSON.stringify(response)))

//försöker koppla ihop till themeal med hjälp av gemini
fetch('www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(res => res.json())
  .then(data => {
    console.log(data.meals[0].strInstructions); //alternativt data för allt el t.ex. data.meals[0].strMeal
  });
