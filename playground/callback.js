setTimeout(() => {
    console.log("After 2 seconds")
}, 2000)


const sum = (value1, value2, callback)=>{
    setTimeout(()=>{
        console.log("SUM is : ")
        const sum = value1 + value2
        callback(sum)
    }, 2000)
}

const data = sum(12,29,(value)=>{
    console.log("Sum is : "+value)
})
// console.log("Data is "+data)