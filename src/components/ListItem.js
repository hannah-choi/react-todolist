import React, { useState } from "react";

function ListItem({ value, deleteTodo, updateTodo, index }) {
    const [isEditing, setEditingMode] = useState(false);
    const [task, setNewTask] = useState(value);

    const viewMode = (
        <div>
            {value}{" "}
            <input
                type="button"
                value="Update"
                onClick={() => {
                    setEditingMode(true);
                }}
            />{" "}
            <input
                type="button"
                value="Delete"
                onClick={() => {
                    deleteTodo(index);
                }}
            />
        </div>
    );

    const editMode = (
        <form
            onSubmit={function (e) {
                e.preventDefault();
                updateTodo(index, task);
                setEditingMode(false);
            }}
        >
            <input
                type="text"
                value={task}
                name="editedTodo"
                onChange={e => setNewTask(e.target.value)}
            />
            <input type="submit" value="submit" />{" "}
            <input
                type="button"
                value="Cancel"
                onClick={() => {
                    setEditingMode(false);
                }}
            />
        </form>
    );

    return <li>{isEditing ? editMode : viewMode}</li>;
}

export default ListItem;
