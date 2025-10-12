let playerAge = 10;
console.log(checkEligibility(playerAge));
//spelare måste vara minst 13 år gamla för äventyret
function checkEligibility(playerAge){
  if (playerAge <= 12) {
    return "At " + playerAge + " you are too young to join the adventure."
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

button.addEventListener("click", () =>{
  llet tempInt = Number(age.value);
  if(checkAge(tempInt)) {
    let remove = document.getElementsByClassName("pClass");
    [
  ..
    remove
  ].
    forEach(el => el.remove());
    createP("You are " + tempInt + "years old, and prepare yourself for adventure.");
    rightLeft(right, left);
  } else{
    createP ("You are too young");
  }
})
