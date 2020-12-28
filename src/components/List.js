import React from "react";
import ListItem from "./ListItem";

function List({ data, deleteTodo, updateTodo }) {
    return (
        <ul>
            {data.map((item, i) => (
                <ListItem
                    value={item.task}
                    key={i}
                    index={i}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </ul>
    );
}

export default List;
