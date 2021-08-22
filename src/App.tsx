import { useState } from 'react';
import { v4 } from 'uuid'
import Input from './components/Input';
import List from './components/List';


function App() {

    const initialTodos: Todo[] = [
        { text: 'Hacer la colada', id: v4(), complete: true },
        { text: 'Leer el libro', id: v4(), complete: false }];

    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
    }

    const deleteTodo: DeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo: AddTodo = (text) => {
        setTodos([...todos, { text, complete: false, id: v4() }])
    }

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
