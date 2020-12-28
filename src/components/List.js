import React from "react";
import ListItem from "./ListItem";

function List({ data, deleteTodo }) {
    return (
        <ul>
            {data.map((item, i) => (
                <ListItem
                    value={item.task}
                    key={i}
                    index={i}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}

export default List;
