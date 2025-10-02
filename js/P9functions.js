//lista med funktioner

/* Output:Move Forward.
Output:Turn Right.
Output:Turn Right.
Output:Move Forward. */

let listDirection = ["Move forward", "Turn right"];
//denna lista ger textinstruktionerna
console.log("Lista möjliga instruktioner:")
console.log(listDirection);

let listOrder = [0,1,1,0];

function movement(){
  listOrder.forEach(orderNum => {
    const instruction = listDirection[orderNum];
    console.log("Output: " + instruction + ".");
  });
}

movement();

//nästa exempel

function test(){
  console.log("det här kommer synas");
  return 24;
  console.log("det här kommer inte synas");
}
let results = test();
console.log("Här skriver vi ut testvärdet " + results);

function test2(bla,bly){
  return bla*bly;
}

let svar = test2(123,456);
console.log(svar);
console.log(svar/100);
