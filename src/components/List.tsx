import React, { ReactElement } from 'react'
import ListItem from './ListItem'

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
}

function List({ todos, toggleTodo, deleteTodo, editTodo }: Props): ReactElement {
    return (
        <ul>
            {todos.map(todo => <ListItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />)}
        </ul>
    )
}

export default List
