'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removebutton = document.querySelector('#remove-button')
const dateElement = document.querySelector('#last-edited')
const noteid = location.hash.substring(1)
let Notes = getSavedNotes()
let note = Notes.find((note) => {
    return note.id === noteid
})

if(note === undefined){
    location.assign('/note-app/index.html')
}

titleElement.value = note.title 
bodyElement.value = note.body 
dateElement.textContent = generateLastEdited(note.updatedAt)
titleElement.addEventListener('input',(event)=>{
    note.title = event.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(Notes)
})

bodyElement.addEventListener('input' , (event) =>{
    note.body = event.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(Notes)
})

removebutton.addEventListener('click',(event) => {
    removeNote(note.id)
    saveNotes(Notes)
    location.assign('/note-app/index.html')
})


//global eventlistener
window.addEventListener('storage', (event) => {
    if(event.key === 'Notes'){
        Notes = JSON.parse(event.newValue)
        let note = Notes.find((note) => {
            return note.id === noteid
        })
        
        if(note === undefined){
            location.assign('/note-app/index.html')
        }
        
        titleElement.value = note.title 
        bodyElement.value = note.body 

        
    }
})