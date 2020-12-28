import React from "react";

function Input({ addTodo }) {
    return (
        <form onSubmit={e => addTodo(e)}>
            <input type="text" name="addTodoInput" />
            <input type="submit" value="Add" />
        </form>
    );
}

export default Input;
