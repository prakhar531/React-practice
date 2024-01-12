import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    //creating array of objects to store task and unique id which is generate using uuid npm package
    let [todos, setTodos] = useState([{ task: "coding", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
    };

    let markAsDoneAll = () => {
        setTodos((prevTodo) => (
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        ));
    };

    let markAsDoneone = (id) => {
        setTodos((prevTodo) => (
            prevTodo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                } else {
                    return todo;
                }

            })
        ));
    };

    let markAsNotDoneAll = () => {
        setTodos((prevTodo) => (
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone: false,
                }
            })
        ));
    };

    let markAsNotDoneone = (id) => {
        setTodos((prevTodo) => (
            prevTodo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: false,
                    }
                } else {
                    return todo;
                }

            })
        ));
    };



    let textStyle = {
        textDecoration: 'lineThrough',
    };

    return (
        <div>

            <h2>Todo App</h2><br />
            <hr />

            <h4>Add Tasks</h4>
            <input type="text" placeholder="Enter some task" value={newTodo} onChange={updateTodoValue} />&nbsp;&nbsp;
            <button onClick={addNewTodo}>Add task</button>
            <br />
            <br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}
                            </span>&nbsp;&nbsp;

                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                            {todo.isDone ? <button onClick={() => markAsNotDoneone(todo.id)}>Mark as Not Done</button> : <button onClick={() => markAsDoneone(todo.id)}>Mark as Done</button>}
                            <br />
                            <br />
                        </li>
                    ))
                }
            </ul>
            <br />
            <br />
            <button onClick={markAsDoneAll}> Mark All as Done</button>&nbsp;&nbsp;
            <button onClick={markAsNotDoneAll}> Mark All as Not Done</button>
        </div>
    );
};