// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function () {
    const jsonArray = JSON.parse(this.response)
    
    // Get all the country names from Asia continent /region using Filter function
    console.log("All the country names from Asia continent /region using Filter function")
    jsonArray.filter(function (countries) {
        if(countries.region == 'Asia')
        {
            console.log("Country Name:",countries.name.common)
        }
    })

    // Get all the countries details from Asia continent /region using Filter function
    console.log("All the countries details from Asia continent / region using Filter function")
    let asianCountriesDetails = jsonArray.filter((countryDetails) => countryDetails.region == 'Asia')
    console.log(asianCountriesDetails)
}
