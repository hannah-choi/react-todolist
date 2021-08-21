import React from "react";
import ListItem from "./ListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const List: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
        </ul>
    )
}

export default List;
