const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return "Your notes....."
}

const addNote = function(title, body){
    const notes = loadNotes()
    console.log("Notes is :  "+ notes)
    console.log("Title is:  " + title)
    const dupliccate = notes.filter((item) => item.title === title)
    console.log("Duplicate is :  "+ dupliccate.length)
    if(dupliccate.length === 0){
    notes.push({
        title: title,
        body: body
    })
    
    console.log(chalk.green("New Note Added!!!"))
    }else{
        console.log(chalk.red("DUPLICATE NOTE with same title: "+title))
    }
    saveNotes(notes)
}

const removeNote = function(title){
       const notes = loadNotes()
        console.log("Notes is :  "+ notes)
    console.log("Title is:  " + title)
    if(notes.find(item=> item.title === title)){
        const index = notes.findIndex(note => note.title === title)
        if(index != -1){
            notes.splice(index)
            saveNotes(notes)
             console.log(chalk.green("Note Deleted Successfully!!!"))
        }
    }else{
       console.log(chalk.red("Note not found!!!   Title: "+title)) 
    }
}


const readNotes = (title)=>{
    const notes = loadNotes()
    console.log("title is   "+title)
    const findNote = notes.find(item => item.title === title)
    console.log("find Note:  "+ findNote === undefined)
    if(findNote === undefined){
     console.log(chalk.red("Note not found!!!"))
    }else{
      console.log(chalk.green("Note is already exist!!!"))
      console.log(chalk.green(findNote.title)+"    "+ chalk.green(findNote.body) )
    }
} 

const listNotes = function(){
    const notes = loadNotes()
    return notes.map(item => item.title)
}

const saveNotes = function(notes){
    console.log("SaveNotes is :  "+ notes)
    const bufferedNotes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', bufferedNotes)
}
const loadNotes = function(){
    try{
    const readNotes = fs.readFileSync('notes.json')
    const bufferedNotes = readNotes.toString()
    return JSON.parse(bufferedNotes)
    }catch(e){
    return []
    }
}

module.exports = {
    getNote: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNotes,
    readNote: readNotes
}