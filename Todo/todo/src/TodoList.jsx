import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    //creating array of objects to store task and unique id which is generate using uuid npm package
    let [todos, setTodos] = useState([{ task: "coding", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
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
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    );
};