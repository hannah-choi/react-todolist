import React, { useContext } from "react";
import todoContext from "../context/todoContext";
import ListItem from "./ListItem";

function List() {
    const todos = useContext(todoContext);

    return (
        <ul>
            {todos.map(todo => (
                <ListItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
}

export default List;
