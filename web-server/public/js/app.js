// const getCode = require('./utils/geocode')
console.log("Client side Javascript is loaded!!!")
// const url =
// 'http://localhost:3000/weather?address=Delhi'
//  'https://jsonplaceholder.typicode.com/users'
// fetch(url).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log("Response Error is : ", data.error);

//         } else {
//             console.log("Data is : ", data)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
messageOne.textContent = ''
messageTwo.textContent = ''
// console.log("Search Value is : " + searchValue.value)
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Clicked on search button")
    console.log("Search Value after clicked is : " + searchValue.value)
    // getCode.getGeocode(searchValue.value, (error, data) => {
    //     if (error === undefined) {
    // console.log("Address Lat long Data is : ", data)
    // const url = 'https://api.open-meteo.com/v1/forecast?latitude=19.148684&longitude=72.992706&current_weather=true'
    messageOne.textContent = 'Loading.....'
    messageTwo.textContent = ''
    fetch('/weather?address=' + searchValue.value).then((response) => {
        // console.log("response ----------", response)
        response.json().then((data) => {
            // console.log(data.Error)
            const localData = data
            // console.log("Local Data is : ", localData.Error)
            if (localData.Error === undefined) {
                console.log("-------Data is : ", data)
                const tempData = data
                messageTwo.textContent = "Current temperature of " + tempData.Weather.forecast.location + " is: " + tempData.Weather.forecast.temperature + "\u00B0C"
            } else {
                console.log("Response Error is : ", localData.Error);
                messageTwo.textContent = localData.Error
            }
            messageOne.textContent = ''
        }).catch((error) => {
            console.log("Fetch Error:", error);
            messageOne.textContent =
                "Unable to connect to server";
            messageTwo.textContent = '';
        })
    }).catch((error)=>{
            console.log("Fetch Error while calling api:", error);
            messageOne.textContent =
                "Unable to connect to server";
            messageTwo.textContent = '';
    })
    // messageOne.textContent = ''
    // } else {
    //     return callback(error, undefined)
    // }
    // })

})