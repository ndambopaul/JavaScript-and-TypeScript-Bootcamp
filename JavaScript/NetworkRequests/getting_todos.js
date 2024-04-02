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


const deleteTodo = async(todoId) => {
    let response = await fetch(`${BASE_URL}/todos/${todoId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });

    let data = await response.json();
    console.log(data);
}

updateTodo(5);