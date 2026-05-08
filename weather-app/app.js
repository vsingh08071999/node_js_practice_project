

// console.log("Starting")

// setTimeout(()=>{
// console.log("Run After 2 sec")
// }, 2000)

// setTimeout(()=>{
// console.log("Run After 0 sec")
// }, 0)

// console.log("Stopping")



const yargs = require("yargs")
const request = require("postman-request")
const weather = require('./weather.js')

// const url = ""
// request({url, json: true}, (error, response)=>{
//     // console.log("Error: "+ error)

//     // console.log(response.statusCode)
//     if(error){
//         console.log("Error: "+ error)
//     }else
//     if(response.statusCode == 200){
//         // const data = JSON.parse(response.body)

//         console.log("Data:   ",response.body)
//         console.log("Current : ", response.body.current)
//         console.log("Current temperature is ", response.body.current.temperature, "Feels like is ", response.body.current.feelslike)
//     }else{
//         console.log(chalk.red("Something went wrong!!!"))
//     }

// })

const geoCode = require("./utils/geocode")
const getTemp = require("./utils/forecast")

const getTempWithLocation = function (address) {
    geoCode.getGeocode(address, (error, data) => {
        console.log("Error is : ", error)
        console.log("Data is : ", data)

        if (error === undefined) {
            const location = data.location
            const lat = data.lat
            const long = data.long
            console.log("Data is : " + location)
            getTemp.getTemp(lat, long, (error, tempData) => {
                if (error === undefined) {
                    const temp = tempData.temp
                    console.log("Current temperature of " + data.location + " is : " + temp)
                }
            })

        }
    })
}
yargs.command({
    command: "latlong",
    describe: "Lat/Long",
    builder: {
        address: {
            describe: 'get address',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Address is : " + argv.address)
        getTempWithLocation(argv.address)
    }
})

console.log(yargs.argv)





// geoCode.getGeocode("Mumbai", (error, data) => {
//     console.log("Error is : ", error)
//     console.log("Data is : ", data)

//     if (error === undefined) {
//         const location = data.location
//         const lat = data.lat
//         const long = data.long
//         console.log("Data is : " + location)
//         getTemp.getTemp(lat, long, (error, tempData) => {
//             if (error === undefined) {
//                 const temp = tempData.temp
//                 console.log("Current temperature of " + data.location + " is : " + temp)
//             }
//         })

//     }
// })