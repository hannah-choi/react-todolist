import React from "react";
import { useTodo } from "../TodoProvider";

function Input() {
    const { addTodo } = useTodo();

    const handleSubmit = e => {
        let newTodo = e.target.newTodo;
        e.preventDefault();
        if (newTodo.value) {
            addTodo(newTodo.value);
            newTodo.value = "";
        }
    };

    return (
        <form className="todoForm" onSubmit={e => handleSubmit(e)}>
            <input type="text" name="newTodo" />
            <input type="submit" />
        </form>
    );
}

export default Input;
