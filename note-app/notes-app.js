let Notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}
renderNotes(Notes, filters)

document.querySelector('#search-text').addEventListener('input', (event)=>{
    filters.searchText = event.target.value
    renderNotes(Notes,filters)
})

// document.querySelector('#create-note').addEventListener('click',(event)=>{
    
// })
let userName = []
document.querySelector('#name-form').addEventListener('submit', (event)=>{
    event.preventDefault()
    userName.push({
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value
    })
    saveUserName(userName)
    
    event.target.elements.firstName.value = ''
    event.target.elements.lastName.value = ''
})

//for creating the new notes
document.querySelector('#add-new-notes').addEventListener('submit',(event)=>{
    event.preventDefault()
    const id = uuidv4()
    const timestamp = moment().valueOf()

    Notes.push({
        id: id,
        title: event.target.newNote.value,
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(Notes)
    //location.assign(`/note-app/edit.html#${id}`)
    event.target.elements.newNote.value = ''
    renderNotes(Notes,filters)
})


//for the checkbox event
document.querySelector('#checkMe').addEventListener('change',(event)=>{
    console.log(event.target.checked)
})

document.querySelector('#filter-by').addEventListener('change', (event) =>{
    filters.sortBy = event.target.value
    renderNotes(Notes , filters)

})

window.addEventListener('storage',(event) => {
    if(event.key === 'Notes'){
        Notes = JSON.parse(event.newValue)
        renderNotes(Notes , filters)
    }
})


// const now = new Date()

// const timeStamp = now.getTime()
// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())

// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Date: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()} Minutes: ${now.getMinutes()} Seconds: ${now.getSeconds()}`)

//create two dates in the past 
// get timestamps to both
// figure out which is first and print its time ( use toString)

// const date1 = new Date('January 20 2000 09:38:30')
// const date2 = new Date('January 31 2000 09:38:30')

// const timeStamp1 = date1.getTime()
// const timeStamp2 = date2.getTime()

// const diff = timeStamp1 - timeStamp2
// if(diff > 0){
//     console.log(date2.toString())
// }
// else{
//     console.log(date1.toString())
// }

const now = moment()

now.subtract(26,'y').add(5,'M').subtract(16,'d')
const DOB = now.format('YYYY MM DD')
console.log(`My Date of Birth is ${DOB}`)

