//create an array with five todos
// you have x todos
//print the first and second to last items -> Todo: walk the dog

// const todos = ['first todo',
//                 'second todo',
//                 'third todo',
//                 'fourth todo',
//                 'fifth todo'
//                 ]
// console.log(`You have ${todos.length} todos in the list`)
// // // console.log(`${todos[0]} ` + `${todos[todos.length-2]}`)
// // console.log(todos)

// // //Delete the third item 
// // //Add a new item onto the end
// // //remove the first item from the list
// // todos.splice(2,1)
// // console.log(todos)

// // todos.push('new todo')
// // console.log(todos)

// // todos.shift()
// // console.log(todos)
// todos.forEach((item , index) =>{
//     console.log(`${index+1}. ${item}`)
// })

///  1. create a todo array of objects -> title , title
///  2. create a function to remove a todo by text value

const todos = [
    {
        title: "wake up at 8",
        completed: true
    },
    {
        title: "check newspaper",
        completed: false
    },
    {
        title: "have your breakfast",
        completed: true
    },
    {
        title: "dress up",
        completed: true
    },
    {
        title: "go to work",
        completed: false
    },
]

// const deleteTodo = (todos , todotitle) =>{
//     const index =  todos.findIndex((todo)=>{
//         return todo.title.toLowerCase() === todotitle.toLowerCase()
//     })
//     if(index > -1){
//         todos.splice(index, 1)
//     }
    
// }
// deleteTodo(todos , 'check newspaper')
// console.log(todos)

//use of filters in the array

// const getThingsToDo = (todos) =>{
//     return todos.filter((todo , index) =>{
//         return todo.completed === false
//     })
    
// }
// console.log(getThingsToDo(todos))

const sortToDos = (todos) =>{
    todos.sort( (a , b)=>{
        if(!a.completed && b.completed)
            return -1
        else if(!b.completed && a.completed)
            return 1
        else
            return 0
    })
}
sortToDos(todos)
console.log(todos)