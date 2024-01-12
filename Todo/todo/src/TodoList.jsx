import { useState } from 'react';
export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Enter some task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewTodo}>Add task</button>
            <br />
            <br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
};