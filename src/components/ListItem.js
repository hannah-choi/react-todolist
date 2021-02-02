import React from "react";

function ListItem({ id, task, completed }) {
    return (
        <li>
            {task}
            <input type="button" value="Edit" />
            <input type="button" value="Delete" />
        </li>
    );
}

export default ListItem;
