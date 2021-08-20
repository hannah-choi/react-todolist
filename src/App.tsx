import { useState } from 'react';
import Input from "./components/Input";
import List from "./components/List";

const initialTodos: Todo[] = [
    { text: 'Reading books', complete: false },
    { text: 'Cooking dinner', complete: false },
]

function App() {

    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo = (selected: Todo) => {
        setTodos(todos.map(todo =>
            todo === selected ? { ...todo, complete: !todo.complete } : todo
        ))
    }

    return (
        <div className="App">
            <Input />
            <List todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
}

export default App;
