//hur upprepar man mindre kod i if-statement? genom funktioner

console.log("Do you want lasagna?")

function makeLasagna(){
  console.log("Yes, let's make lasagna!")
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.")
}

let isHungry = false;
//breakfast
if(isHungry){
  makeLasagna();
}
else {
  console.log("No thanks, not hungry.")
}

isHungry = true;
//lunch
if(isHungry){
  makeLasagna();
}

//nu skapar vi listor

let listExample = [1,3,5,9,13]
console.log(listExample + " Listar hela listan.");
console.log("Lista värdet i position två, räknar från 0: " + listExample[2]);

let list2 = [1,2,3]
list2.forEach(char => console.log(char));
