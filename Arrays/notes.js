

// const notes = ['Note 1', 'Note 2', 'Note 3']



// console.log(notes)
//console.log(notes.length)
// // console.log(notes[0])
// notes.push('My new note')
// console.log(notes)
// console.log(notes.length)
// let poppedItem = notes.pop()
// console.log(`The item that is popped is ${poppedItem}`)
// let shiftItem = notes.shift()
// console.log(`The item that is shifted from the array is ${shiftItem}`)
// let unshiftItem = notes.unshift('new note 2')
// console.log(`The number of items in the array is ${notes.length}`+ "\n" + notes)

// notes.splice(1,1)
// console.log(notes)
// console.log(notes.length)

// notes.splice(1,0,'This is the new second item') //to replace the item at position 2
// console.log(notes)
// console.log(notes.length)

// notes.forEach(function(item , index){
//     console.log(`${index} : ${item}`) 
// })

// console.log(notes)

// for(let count=0; count < notes.length; count++){
//     console.log(`${count+1} : ${notes[count]}`)
// }
//console.log(notes.indexOf('Note 2'))
// const newNotes = [
//     {},
//     {
//         title: 'My next trip',
//         body: 'I would like to travel to Spain'
//     }, 
//     {
//         title: 'Habits to work on',
//         body: 'Exercise. Eating a bit bet'
//     },
//     {
//         title: 'Office modifications',
//         body: 'get a new Seat'
//     },
//     {}
// ]


//console.log(newNotes.indexOf({})) // returns -1 and is not useful for array of objects

//better approach is to use findIndex which unlike the indexOf method
//doesn't verify 
// const index= newNotes.findIndex((note , index) => {
//     return note.title === 'Office modifications'
// })


// //check for an empty object in an array of objects and returning the indices

// const isEmpty = (obj)=>{
//     return Object.keys(obj).length === 0
// }
// console.log(`The empty objects in the array of objects are at the following indices`)

// newNotes.forEach( (item , index)=>{
//     if(isEmpty(item))
//       console.log(`${index}`)
// })
// //console.log(index)

// const findNote = (newNotes,noteTitle) =>{
//     const index = newNotes.findIndex( (note , index) =>{
//         return note.title.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     console.log(index)
//     return newNotes[index]
// }


// const findNote = (newNotes, noteTitle) =>{
//     return newNotes.find( (note , index) =>{
//         return note.title === noteTitle 
//     })
// }
// const note = findNote(newNotes , 'Office modifications')
// console.log(note)

const Notes = [
    {
        title: 'My next trip',
        body: 'I would like to travel to Spain'
    }, 
    {
        title: 'habits to work on',
        body: 'Exercise. Eating a bit bet'
    },
    {
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit bet'
    },
    {
        title: 'Office modifications',
        body: 'get a new Seat'
    },
]


//filtering arrays

// const filteredNotes = Notes.filter((note , index) => {
//     const isTitleMatch = note.title.toLowerCase().includes('office')
//     const isBodyMatch = note.body.toLowerCase().includes('office')
//     return isTitleMatch || isBodyMatch
// })
// console.log(filteredNotes)


// const findNotes = (Notes , query) =>{
//     return Notes.filter((note , index) => {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }
// const note = findNotes(Notes, 'Office modifications')
// console.log(note)

const sortNotes = (Notes) => {
    return Notes.sort((a, b) => {
        return a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1
    })
}
console.log(sortNotes(Notes))

