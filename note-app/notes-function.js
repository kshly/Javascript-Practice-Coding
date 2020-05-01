'use strict' //catches errors which are otherwise ignored by js processors
//read existing notes from localStorage

const getSavedNotes = () => {
    
    const notesJSON = localStorage.getItem('Notes')
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }
    else{
        return []
    }
}

//save user Name
const saveUserName = (userName) => {
    localStorage.setItem('userName',JSON.stringify(userName))
}
//Save notes 
const saveNotes = (Notes) => {
    localStorage.setItem('Notes',JSON.stringify(Notes))
}

//generate the DOM structure for the note
const generateDOM = (note) =>{
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    //set-up the remove note button
    button.textContent = "X"
    button.type = "reset"
    button.className = "btn btn-default"
    
    noteEl.appendChild(button)
    button.addEventListener('click', _ => {
        let noteTitle = note.title 
        console.log(noteTitle)
        removeNote(note.id)
        saveNotes(Notes)
        renderNotes(Notes , filters)
    })  
    //setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    }
    else{
        textEl.textContent = 'unnamed note'
    }
    textEl.setAttribute('href',`/note-app/edit.html#${note.id}`)
    noteEl.style.textAlign = "left"    
    noteEl.appendChild(textEl) 
    return noteEl
}


//Sort your notes in one of three ways
const sortedNotes = (Notes , sortBy) => {
    if(sortBy === 'byEdited'){
        return Notes.sort((a , b) => {
            if(a.updatedAt > b.updatedAt)
                return -1 
            else if(a.updatedAt < b.updatedAt)
                return 1
            else
                return 0
        })
    }
   else if(sortBy === 'recentCreated'){
       return Notes.sort((a,b) => {
           if(a.createdAt > b.createdAt)
              return -1
           else if(a.createdAt < b.createdAt)
              return 1
           else
              return 0
       })
   }
   else if(sortBy ==='sortedAlphabetically'){
        //sorting the notes in ascending order    
        return Notes.sort((a , b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }
            else if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            }
            else{
                return 0
            }
        })
   }
}


//render application notes
const renderNotes = (Notes , filters)=>{
    //console.log(note.title)
    Notes = sortedNotes(Notes , filters.sortBy)
    const filteredNotes = Notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    //below line clears the notes div every time we call the renderNotes function
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteEl = generateDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Remove note from a list of notes
const removeNote = (id) => {

    const noteIndex = Notes.findIndex((note) => {
        return note.id === id
    })

    if(noteIndex > -1){
        Notes.splice(noteIndex , 1)
        localStorage.removeItem(id)
    }
   
}

//generate the last edited message

const generateLastEdited = (timestamp) => {
    return `last edited ${moment(timestamp).fromNow()} ago`
}