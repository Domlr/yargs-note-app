const fs = require('fs');
const chalk = require('chalk');

const readNote = (title)=>{
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log("no match");
    }
}

const listNotes = ()=>{
    console.log("youre notes");
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    })
}

const getNotes = ()=>{
    console.log(`you're notes...`);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep  = notes.filter((note) =>{
        return note.title !== title;
    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.green('note was removed'));
        savedNotes(notesToKeep);
    }
    else {
        console.log(chalk.red('no note was removed'));
    }
}


const addNote = (title, body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>{
        note.title !== title;
    })

    if (duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes);
        console.log('new note added');
        } else {
            console.log('note title taken');
        }
    } 

 
    

const savedNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return[];
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};