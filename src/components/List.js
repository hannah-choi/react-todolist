import React from "react";
import ListItem from "./ListItem";
import { useTodo } from "../TodoProvider";

function List() {
    const { todos } = useTodo();

    return (
        <ul>
            {todos.map(item => (
                <ListItem key={item.id} {...item} />
            ))}
        </ul>
    );
}

export default List;
