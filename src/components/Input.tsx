import React, { useState } from 'react'

interface Props {
    addTodo: AddTodo;
}

export const Input: React.FC<Props> = ({ addTodo }) => {

    const [input, setInput] = useState('')

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); addTodo(input); setInput('')
        }}>
            <input type='text' name='newTodo' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type='submit' value='Add todo' />
        </form>
    )
}

export default Input