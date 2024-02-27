// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function () {
    const jsonArray = JSON.parse(this.response)

    console.log("Print the country that uses US dollars as currency")
    jsonArray.filter(function(countries) 
    {
        if(countries.currencies?.USD)
        {
            console.log("Country Name:", countries.name.common)
        }
    })  
    
    // Print the country details that uses US dollars as currency.
    console.log("Prints the entire country details that uses US dollars as currency")
    let countryDetails = jsonArray.filter((countries) => countries.currencies?.USD)
    console.log(countryDetails)
}

 