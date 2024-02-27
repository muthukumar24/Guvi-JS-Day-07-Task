
// Print the total population of countries using reduce function

// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function (){
    const jsonArray = JSON.parse(this.response)

    // Print the total population of countries using reduce function
    console.log("Print the total population of countries using reduce function")
    let totalPopulation = jsonArray.reduce((accum, values) => accum + values.population, 0)
    console.log("Total population of all countries :",totalPopulation)
}