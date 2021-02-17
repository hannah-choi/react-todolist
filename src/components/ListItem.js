import React, { useState } from "react";
import Progress from "./Progress";
import { useTodo } from "../TodoProvider";

function ListItem({ id, task, completed }) {
    const { deleteTodo, updateTodo } = useTodo();

    const [editing, setEditing] = useState(false);
    const [progress, setProgress] = useState(true);
    const [text, setText] = useState(task);

    const handleToggle = () => setProgress(!progress);

    const handleUpdate = e => {
        e.preventDefault();
        updateTodo(id, text);
        setEditing(false);
    };

    const view = (
        <div style={{ textDecoration: completed ? "line-through" : "" }}>
            <input type="checkbox" defaultChecked={completed ? true : false} />
            {task} <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <Progress
                todo={task}
                progress={progress}
                completed={completed}
                toggle={handleToggle}
            />
        </div>
    );

    const edit = (
        <form onSubmit={e => handleUpdate(e)}>
            <input
                type="text"
                value={text}
                onChange={({ target }) => setText(target.value)}
            />
            <input type="submit" value="update" />
            <input
                type="button"
                value="cancel"
                onClick={() => setEditing(false)}
            />
        </form>
    );

    return <li>{editing ? edit : view}</li>;
}

export default ListItem;
