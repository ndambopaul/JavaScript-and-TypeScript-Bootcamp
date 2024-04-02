const BASE_URL = "https://jsonplaceholder.typicode.com";

const getTodos = async () => {
    try {
        let response = await fetch(`${BASE_URL}/todos/`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching todos:', error.message);
    }
}

getTodos();

// Getting a single item
const getTodo = async(todoId) => {
    let response = await fetch(`${BASE_URL}/todos/${todoId}/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });


    let todo = await response.json();
    console.log(todo);
};


// Creating an item
const createTodo = async(todo) => {
    let response = await fetch(`${BASE_URL}/todos/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    let data = await response.json()
    console.log(data)
}

const newTodoItem = {
    'userId': 1,
    'title': 'Learning JavaScript',
    'completed': false
}
createTodo(newTodoItemodoItem);

//Updating an item
const updateTodo = async(todoId, todoItem) => {
    let response = await fetch(`${BASE_URL}/todos/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(todoItem)
    });

    let data = await response.json();
    console.log(data);
}

const todoItem = {
    'userId': 1,
    'title': 'Learning JavaScript and TypeScript',
    'completed': true
}
updateTodo(50, todoItem);


//Deleting an item
const deleteTodo = async(todoId) => {
    let response = await fetch(`${BASE_URL}/todos/${todoId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });

    let data = await response.json();
    console.log(data);
}

updateTodo(5);