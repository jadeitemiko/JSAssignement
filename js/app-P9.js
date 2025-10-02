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
