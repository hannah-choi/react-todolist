import { useState } from 'react';
import Input from "./components/Input";
import List from "./components/List";
import { v4 } from 'uuid'

const initialTodos: Todo[] = [
    { text: 'Reading books', complete: false, id: v4() },
    { text: 'Cooking dinner', complete: false, id: v4() },
]

function App() {

    const [todos, setTodos] = useState(initialTodos)

    const addTodo: AddTodo = (text) => {
        setTodos([...todos, { text, complete: false, id: v4() }])
    }

    const toggleTodo: ToggleTodo = (selected: Todo) => {
        setTodos(todos.map(todo =>
            todo === selected ? { ...todo, complete: !todo.complete } : todo
        ))
    }

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <List todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
}

export default App;
