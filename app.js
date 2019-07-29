// const add = require('./utils.js')

// const sum = add(4, -2);

// console.log(sum);
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//custom yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
        
    }
})

//create a list
yargs.command({
    command: 'list',
    describe: 'creat a list',
    handler: ()=>{
        notes.listNotes()
    }
})
//create a read
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title);
    }
})

yargs.parse()



