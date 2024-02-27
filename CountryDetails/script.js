// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function () {
        const jsonArray = JSON.parse(this.response)
        // Print the following details name, capital, flag, using forEach function
        console.log("Country details with name, capital, flag, using forEach function")
        jsonArray.forEach(function(countries) {
        console.log("Country Name:",countries.name.common)
        console.log("Capital:",countries.capital)
        console.log("Country Flag:",countries.flags.png)
        console.log("---------------------------");
        })
    }