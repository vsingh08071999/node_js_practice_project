const request = require("postman-request")

require('dotenv').config()
const mapbox_token = process.env.MAPBOX_TOKEN;
console.log("Token: "+ mapbox_token)
const getLatLong = (address, callback) => {
    const url =
        "https://api.mapbox.com/search/geocode/v6/forward?q=" + address + "&access_token=" + mapbox_token + "&limit=1"
    // "url"
    console.log("GEOCODE URL:  "+ url)
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