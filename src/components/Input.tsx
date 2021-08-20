import React, { useState } from 'react'

interface Props {

}

export const Input: React.FC<Props> = (props) => {

    const [input, setInput] = useState('')

    return (
        <form>
            <input type='text' name='newTodo' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type='submit' />
        </form>
    )
}

export default Input