const request = require("postman-request")
// data come with weather_api_key
// require('dotenv').config()
// const weather_api_key = process.env.WEATHERSTACK_API_KEY;
// console.log("Weather API: " + weather_api_key)
const getTemp = (lat, long, callback) => {   // MY WAY OF Code
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&current_weather=true"
    // "https://api.weatherstack.com/current?access_key=" + weather_api_key + "&query=" + lat + "," + long    // data come with weather_api_key
    // "url"
    console.log("URL Forecast API: " + url)
    request(
        { url: url, json: true },
        (error, response) => {
            if (error) {
                // console.log("Error in weather forecast is : " + error)
                callback("Unable to connect to weather services!", undefined)
            } else if (response.body.error) {
                callback("Unable to find location!", undefined)
            } else
            //  if (response.statusCode == 200) 
            {
                // const temperature = response.body.current.temperature  // data come with weather_api_key
                const temperature = response.body.current_weather.temperature
                console.log("Current temp is : " + temperature)
                callback(undefined, {
                    temp: temperature
                })
            }
        }
    )
}

module.exports = {
    getTemp: getTemp
}
