/* promise funktion enligt WSD video
let p = new Promise((resolve, reject) => {
  let a = 1 + 1; //byt ut en siffra för att få felmmeddelande
  if (a == 2) {
  resolve('Success')
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log('This is in the then: ' + message);
}).catch((message) => {
  console.log('This is in the catch: ' + message);
})  */

/* kör 3 saker parallelt (t.ex. titta på videor) och resolvar sedan alla tre på en gång
const watchVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 watched')
});
const watchVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 watched')
});
const watchVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 watched')
});

Promise.all([
  watchVideoOne,
  watchVideoTwo,
  watchVideoThree,
]).then((messages) => {
  console.log(messages)
})
*/

/* samma som ovan, men visa resultatet sekventiellt och skriv bara ut första svaret
const watchVideoFour = new Promise((resolve, reject) => {
  resolve('Video 4 watched')
});
const watchVideoFive = new Promise((resolve, reject) => {
  resolve('Video 5 watched')
});
const watchVideoSix = new Promise((resolve, reject) => {
  resolve('Video 6 watched')
});

Promise.race([
  watchVideoFour,
  watchVideoFive,
  watchVideoSix,
]).then((message) => {
  console.log(message)
}) */

//testa promises
//nu testa async
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    //obs MÅSTE vara backtick ` nedan, för att blanda stränginnehåll
    console.log(`Making Request to ${location}`)
    if (location === 'Google') {
      resolve('Google says hi')
    }else {
      reject('We can only talk to Google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra info: ${response}`)
  })
}

//för att få felmeddelande skriv i stället
//makeRequest('Facebook').then(response => {
makeRequest('Google').then(response => {
  console.log('Response received')
  return processRequest(response)
}).then(processedResponse => {
  console.log(processedResponse)
}).catch(error => {
  console.log(error)
})
