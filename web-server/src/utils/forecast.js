const request = require("postman-request")
const getTemp = (lat, long, callback) => {   // MY WAY OF Code
    const url =
        "url"
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
                const temperature = response.body.current.temperature
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
