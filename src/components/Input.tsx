import React, { ReactElement, useState } from 'react'

interface Props {
    addTodo: AddTodo
}

function Input({ addTodo }: Props): ReactElement {

    const [text, setText] = useState('')

    return (
        <form onSubmit={e => { e.preventDefault(); addTodo(text); setText('') }}>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <input type='submit' value='add todo' />
        </form >
    )
}

export default Input
