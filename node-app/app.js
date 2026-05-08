
//// File System

// console.log("Learning file system")
// const fs= require('fs')
// // fs.writeFileSync('plantext.txt',"This is my first project in Node js")
// fs.appendFileSync('plantext.txt',"I am going to learn File System")

//// Import own file
// const utilsfile = require('./utils.js')
// console.log('App File')
// console.log(utilsfile(20,10))

// const notes = require('./notes.js')
// const validator = require('validator')
// const chalk = require('chalk')
// const getNotes = notes
// console.log(getNotes())
// console.log(validator.isEmail('vsihal@gmail.com'))

// Chalk

// console.log(chalk.blue("Hello World"))
// console.log(chalk.green('This is used by chalk'+ chalk.blue.underline.bold(' writing in bold ')) + 'THis is normal text')

// const cmd = process.argv[2]
// console.log(cmd)

// Yargs

const yargs = require('yargs')
yargs.version('1.0.1')

// console.log(process.argv)
// console.log("hello")

const notes = require('./notes.js')
const { default: chalk } = require('chalk')
const getNotes = notes
// console.log(getNotes())

// add, remove, read, list
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title: {
            describe: "My Notes",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "My body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log("Adding new NOTE! "+ argv.title+"   "+argv.body)
        // console.log(getNotes.getNote)
        getNotes.addNote(argv.title,argv.body)
        // console.log(getNotes.addNote)
    }
})
// console.log(yargs.argv)
// create remove command
yargs.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title: {
            describe: "Remove Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Remove Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Removing a note")
        getNotes.removeNote(argv.title)
    }
})
// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("Reading a note")
        getNotes.readNote(argv.title)
    }
})
// create list command
yargs.command({
    command: "list",
    describe: 'List a note',
    handler: function(){
        const notes = getNotes.listNote()
        console.log("Listing a note   "+ notes)
        notes.forEach((item)=>{
            console.log("List is : " + chalk.green.inverse(item))
        })
        
    }
})


// creating add command with builder
yargs.command({
    command: "addition",
    describe: "Adding note",
    builder: {
        title: {
            describe: "My title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "My body",
            demandOption: true,
            "type": "number"
        }
    },
    handler: function(argv){
        console.log("TITLE is: "+ argv.title)
        console.log("TITLE is: "+ argv.body)
    }
})
console.log(yargs.argv)
