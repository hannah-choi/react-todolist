import React, { ReactElement, useState } from 'react'

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
}

function ListItem({ todo, toggleTodo, deleteTodo, editTodo }: Props): ReactElement {

    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(todo.text)

    const normalView: JSX.Element = (
        <>
            <span onClick={() => toggleTodo(todo.id)}>
                <input type='checkbox' checked={todo.complete} />
                {todo.text}</span>
            <input type='button' value='edit' onClick={() => setEdit(true)} />
            <input type='button' value='delete' onClick={() => deleteTodo(todo.id)} />
        </>
    )

    const editView: JSX.Element = (
        <form onSubmit={e => { e.preventDefault(); editTodo(todo.id, text); setEdit(false) }}>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <input type='submit' />
            <input type='button' value='cancel' onClick={() => setEdit(false)} />
        </form>
    )

    return (
        <li style={{ textDecoration: todo.complete ? 'line-through' : '' }} >
            {edit ? editView : normalView}
        </li>
    )
}

export default ListItem
