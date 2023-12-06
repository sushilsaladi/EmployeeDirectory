import { useState,useRef, useContext } from "react";
import { AppContext } from "../App";


const Todo = () => {
    const [todo , setTodo] = useState([]);

    const inputRef = useRef(null);
    const {userName} = useContext(AppContext);

    const handleClick = () => {
        let current_todo = inputRef.current.value!=""?inputRef.current.value:"No Input";
        setTodo([...todo,current_todo]);
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    const handleCheck = (e) => {
        const current = e.target.value;
        const newTodos = todo.filter((t , id) => {
            return id!==current;
        });
        setTodo(newTodos);
    }

    return (
        <div className="todo-app">
            <h1>Simple Todo : <span style={{"color" : "red"}}>{userName}</span></h1>
            <div className="todo-input">
                <input type="text" placeholder="Add todo" ref={inputRef}></input>
                <button onClick={handleClick}>Add Todo</button>
            </div>
            <ul>
                {
                    todo.map((elem,id) => <li key={id} onClick={handleCheck} value={id}>{elem}</li> )
                }
            </ul>
        </div>
    )
}

export default Todo;