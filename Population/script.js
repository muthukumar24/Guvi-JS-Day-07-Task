// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function () {
    jsonArray = JSON.parse(this.response)

    // Get all the country names with a population of less than 2 lakhs using Filter function
    console.log("Get all the country names with a population of less than 2 lakhs using Filter function")
    jsonArray.filter(function (countries) {
        if(countries.population < 200000)
        {
            console.log("Country Name:",countries.name.common)
        }
    })
    // Get all the country details with a population of less than 2 lakhs using Filter function

    console.log("Get all the country details with a population of less than 2 lakhs using Filter function")
    let population = jsonArray.filter((countriesDetails) => countriesDetails.population < 200000)
    console.log(population)
}


