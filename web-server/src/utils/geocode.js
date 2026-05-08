const request = require("postman-request")


const getLatLong = (address, callback) => {
    const url =
        "url"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Try another search", undefined)
        }
        else if (response.statusCode == 200) {
            console.log("Lat long is :  ", response.body)
            const lat = response.body.features[0].properties.coordinates.latitude
            const long = response.body.features[0].properties.coordinates.longitude
            console.log("Value is :  " + lat + "    " + long)
            callback(undefined, {
                lat: lat,
                long: long,
                location: response.body.features[0].properties.full_address
            })
        }
    })

}

module.exports = {
    getGeocode: getLatLong
}