const request = require("postman-request")

const getLatLong = function (address) {   // MY WAY OF Code
    const url = "url"
    request({ url, json: true }, (error, response) => {
        if (error) {
            console.log("Error is : " + error)
        } else
            if (response.statusCode == 200) {
                console.log("Lat long is :  ", response.body)
                const lat = response.body.features[0].properties.coordinates.latitude
                const long = response.body.features[0].properties.coordinates.longitude
                console.log("Value is :  " + lat + "    " + long)
                getTemp(lat, long,address)
            }
    })

}


const getTemp = function (lat, long, address) {   // MY WAY OF Code
    const url = ""
    request(
        { url, json: true },
        (error, response) => {
            if (error) {
                console.log("Error in weather forecast is : " + error)
            } else if (response.statusCode == 200) {
                const temperature = response.body.current.temperature
                console.log("Current temp of "+ address +" is : " + temperature)
            }
        }
    )
}

module.exports = {
    latlong: getLatLong
}


