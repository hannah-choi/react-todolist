import React, { useState } from "react";

function ListItem({ value, deleteTodo, index }) {
    const [isEditing, setEditingMode] = useState(false);

    const viewMode = (
        <form>
            {value} <input type="button" value="Update" />{" "}
            <input
                type="button"
                value="Delete"
                onClick={() => {
                    deleteTodo(index);
                }}
            />
        </form>
    );

    const editMode = (
        <form>
            <input type="button" value="Submit" />{" "}
            <input type="button" value="Cancel" />
        </form>
    );

    return <li>{isEditing ? editMode : viewMode}</li>;
}

export default ListItem;
