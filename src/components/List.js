import React from "react";
import ListItem from "./ListItem";
import { useTodo } from "../TodoProvider";

function List() {
    const { todos } = useTodo();

    return (
        <ul>
            {todos.map(todo => (
                <ListItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
}

export default List;
