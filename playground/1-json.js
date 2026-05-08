const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const fitness = {
    title: "Consistency",
    author: "Vsingh"
}

// TO Parse json data
// const bookJson = JSON.stringify(book)
// console.log(bookJson)
// const jsonParsed = JSON.parse(bookJson)
// console.log(jsonParsed.author)

// create json file with json data

const fs = require('fs')
// const bookJson = JSON.stringify(fitness)
// fs.writeFileSync('fitness_json.json', bookJson) // Create JSON File

// const jsonBufferedData = fs.readFileSync("fitness_json.json")
// const jsonParsedData = JSON.parse(jsonBufferedData)
// console.log(jsonParsedData.author)
// jsonParsedData.title = "FITNESS Content"
// const encodedJsonData = JSON.stringify(jsonParsedData)
// fs.writeFileSync('fitness_json.json',encodedJsonData)
// const jsonBufferedData = fs.readFileSync('1-json.json') // Buffered json data
// const jsonData = jsonBufferedData.toString()
// console.log(jsonData)  // get json data here
// console.log(JSON.parse(jsonData).author)

// Edit json data in another json file  

// const jsonData = JSON.parse(fs.readFileSync('1-json.json'))
// console.log("Author is : "+ jsonData.author)
// jsonData.author = "VISHAL SINGH";
// jsonData.title = "Rich dad Poor dad";
// fs.writeFileSync('1-json.json',JSON.stringify(jsonData))


// Defining Variables

// const event = {
//     name: "Vishal Singh",
//     membersList : ['sahil', "Aniket", "Boby"],
//     printMembers(){ 
//         const that = this;
//         console.log("Your Name is : " + this.name)
//         this.membersList.forEach((item)=>{
//             console.log(that.name + " Member name is "+ item)
//         })
//     }
// }
// event.printMembers()


// Task

const tasks = {
    task : [
        {
            exercise: "Biceps Curl",
            completed: true
        },
         {
            exercise: "Triceps Curl",
            completed: false
        },
         {
            exercise: "Hammer Curl",
            completed: false
        }
    ]
}

const getTask =  {
    getTaskToDo(){
        //  console.log("Task is : "+ tasks.task.filter((value)=> value.completed == true).find.exercise)
        // tasks.task.forEach((item)=>{
        //     if(item.completed == false){
        //         console.log("Taks is : "+ item.exercise)
        //     }
        // })
        // const value = 
        tasks.task.filter(item=> item.completed == false).forEach((ele)=>{
        console.log("Complted Exercise is : "+ ele.exercise)
        })
        // const filtered = products.filter(p => p.price > 5000 );l̥
        
        
    }
}
getTask.getTaskToDo()
// const getTask = getTaskToDo(){
//     console.log("Task is : "+ tasks.task.filter((value)=> value.completed == true))
//     // if(tasks.task.filter((value)=> value.completed == true))
// }
