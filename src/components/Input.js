import React, { useState } from "react";
import useTodo from "../TodoProvider";

function Input() {
    const [newText, setNewText] = useState("");
    const { addTodo } = useTodo();

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                addTodo(newText);
                setNewText("");
            }}
        >
            <input
                type="text"
                name="todoInput"
                value={newText}
                onChange={e => setNewText(e.target.value)}
            />
            <input type="submit" />
        </form>
    );
}

export default Input;
