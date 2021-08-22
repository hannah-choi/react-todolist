import React, { ReactElement } from 'react'
import ListItem from './ListItem'

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

function List({ todos, toggleTodo, deleteTodo }: Props): ReactElement {
    return (
        <ul>
            {todos.map(todo => <ListItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </ul>
    )
}

export default List
