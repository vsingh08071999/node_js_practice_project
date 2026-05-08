const getCode = require('./utils/geocode')
const getTempData = require('./utils/forecast')
const path = require("path")
const hbs = require("hbs")
const express = require('express')
const app = express()

// Define path for Express Config
const viewDirPath = path.join(__dirname, "../templetes/views")
const partialDirPath = path.join(__dirname, "../templetes/partials")
const publicDirPath = path.join(__dirname, "../public")


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewDirPath)
hbs.registerPartials(partialDirPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))
// console.log(__dirname)
// console.log(viewDirPath)

// app.get('', (req, res)=>{
//     res.send("Hello Express!!!")
// })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Index app',
        name: 'Vishal Weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT app',
        name: 'Vishal About'
    })
})



app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP app',
        name: 'Vishal Help',
        work: {
            designation: "Frontend Developer",
            ctc: '10'
        }
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            Error: 'Must proivide an address!!!'
        })
    } else {
        getAddress(req.query.address, (error, data) => {
            if (error === undefined) {
                console.log("Data is : ", data)
                // res.render('index', {
                //     title: 'Current temperature of your city (' + data.currentLocation + ') is : ' + data.temp
                // })
                res.send({
                    Weather: {
                        forecast: {
                            address: req.query.address,
                            temperature: data.temp,
                            location: data.currentLocation
                        }
                    }
                })
            } else {
                console.log("Get Address Error is : ", error)
                const errorMessage = error
                return res.send({
                    Error: errorMessage
                })
            }
        })
        // res.send({
        //     Weather: {
        //         forecast: {
        //             address: req.query.address,
        //             temperature: 33,
        //             location: "MUMBAI"
        //         }
        //     }
        // })
    }

})


const getAddress = (address, callback) => {
    getCode.getGeocode(address, (error, data) => {
        if (error === undefined) {
            console.log("Address Lat long Data is : ", data)
            getTempData.getTemp(data.lat, data.long, (error, tempData) => {
                if (error === undefined) {
                    console.log("Temp Data is : ", tempData)
                    return callback(undefined, { currentLocation: data.location, temp: tempData.temp })
                } else {
                    return callback(error, undefined)
                }
            })
        } else {
            return callback(error, undefined)
        }
    })
}

// app.get('/help', (req, res)=>{
//     res.send("HELP")
// })
// app.get('/homepage', (req, res)=>{
//     res.send("<h1>HOME_PAGE</h1>")
// })

app.use('/help/', (req, res) => {
    res.status(404).render('404', {
        title: 404,
        name: "Vishal Singh",
        errorMessage: 'Help Article not found!!'
    })
})

// Must place at last before listen method
app.use((req, res) => {
    res.status(404).render('404', {
        title: 404,
        name: "Vishal Singh",
        errorMessage: 'Page not found!!'
    })
})

app.listen('3000', () => {
    console.log("Server is running on port: 3000")
})