
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

        return todosJSON !== null ? JSON.parse(todosJSON) : []
      
}

const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id
    })

    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    //setup todo checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)

    checkbox.addEventListener('change',(event) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos , filters)
    })

    //setup a todo text
    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    //setup the todo remove button
    removeButton.textContent = 'X'
    removeButton.className ="btn btn-primary"
    todoEl.appendChild(removeButton)
    
    removeButton.addEventListener('click' , (event) => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos , filters)
    })
    return todoEl
}


const renderTodos = (todos,filters) =>{
    //filtering the todos list based on the search text on the input text
    let filteredTodos = todos.filter((todo) =>{
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //Filtering the todo list to check for the incompleted ones
    filteredTodos= filteredTodos.filter((todo) =>{
        if(filters.hideCompleted){
            return todo.completed === false
        }
        else{
            return true
        }
    })
    

    //For the incomplete todo summary
    document.querySelector('#todos').innerHTML = ''
    const summary = generateTodoSummary()
    document.querySelector('#todos').appendChild(summary)

    //Final work of actually rendering the title based on search and checkbox
    filteredTodos.forEach((todo) =>{
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}

const generateTodoSummary = () => {

    const incompleteTodo = todos.filter((todo) => {
        return todo.completed === false
    })

    const summary = document.createElement('p')
    summary.textContent = `You have ${incompleteTodo.length} todos left to be completed`
    return summary
}


const removeTodo = (id) =>{

    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id 
    })

    if(todoIndex > -1){
        todos.splice(todoIndex , 1)
        localStorage.removeItem(id)
    }
}