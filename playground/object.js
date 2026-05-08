const user = {
    name: "Vishal",
    age: 30,
    add: "Delhi"
}

const {add} = user
console.log(add)

const printUser = ({name,age= 22})=>{
    console.log("Name is : "+ name)
     console.log("Age is : "+ age)
}

printUser({name:"Vishal SIngh",age: 30})

const userData = {
    name: "Vishal",
    age: 30,
    add: {
        location: "DELHI"
    }
}

const {add: { location}} = userData
console.log("Location is: "+ location)


const response = {
    body: {
        current: {
            temperature: 30
        }
    }
}

const {body: {current : {temperature}}} = response
console.log("Current Temperature: "+ temperature)


