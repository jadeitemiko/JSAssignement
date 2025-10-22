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

/* detta är DIREKT, nedan asynkront!
makeRequest('Google').then(response => {
  return processRequest(response)
}).then(processedResponse => {
  console.log(processedResponse)
}).catch(error => {
  console.log(error)
})
*/

//nu ska vi göra asynkront. då måste vi ha en funktion som det asynkrona körs inom
async function doWork() {
  try {
    const response = await makeRequest('Google')
    console.log('Response received (asyncron)')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
  } catch (err) { //för att fånga fel asynkront
    console.log(err)
  }
}
doWork()
