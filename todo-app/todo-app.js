
let todos = getSavedTodos()

//filters to serach and for the hide completed checkbox
const filters = {
    searchText: '',
    hideCompleted: false
}


//rendering the todo list
renderTodos(todos,filters)


//searching based on the input text changes on the search filter
document.querySelector('#todo-text').addEventListener('input', (event)=>{
    filters.searchText = event.target.value
    renderTodos(todos,filters)
})

//adding the new todo based on the button clock of "new Todo" => submit event is called 
document.querySelector('#new-to-do').addEventListener('submit', (event)=>{
    event.preventDefault()
    if(event.target.text.value !==''){
        todos.push({
            id: uuidv4(),
            title: event.target.text.value,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        event.target.elements.text.value = ''
    }
    else{
        alert("please enter something to add")
    }
    
   
})

//check to show the incompleted ones
document.querySelector('#hide-completed').addEventListener('change' , (event) =>{
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})
