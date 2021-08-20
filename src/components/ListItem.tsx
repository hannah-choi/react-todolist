import React from 'react'

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const ListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
            <input type="checkbox" checked={todo.complete} onClick={() => toggleTodo(todo)} />
            {todo.text}
        </li>
    )
}

export default ListItem
