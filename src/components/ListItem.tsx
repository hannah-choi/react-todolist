import React, { ReactElement } from 'react'

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

function ListItem({ todo, toggleTodo, deleteTodo }: Props): ReactElement {
    return (
        <li style={{ textDecoration: todo.complete ? 'line-through' : '' }} >
            <span onClick={() => toggleTodo(todo.id)}>
                <input type='checkbox' checked={todo.complete} />
                {todo.text}</span>
            <input type='button' value='x' onClick={() => deleteTodo(todo.id)} />
        </li>
    )
}

export default ListItem
