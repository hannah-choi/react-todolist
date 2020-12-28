import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./index.css";

function App() {
    const [todos, setTodos] = useState([
        { task: "Do the Laundry" },
        { task: "Go Grocery Shopping" },
        { task: "Finish reading 'Practical Programmer'" },
    ]);

    const addTodo = function (e) {
        e.preventDefault();
        setTodos([...todos, { task: e.target.addTodoInput.value }]);
    };

    const deleteTodo = index => {
        let newArray = Array.from(todos);
        newArray.splice(index, 1);
        setTodos(newArray);
    };

    const updateTodo = (index, newValue) => {
        let newArray = Array.from(todos);
        newArray[index].task = newValue;
        setTodos(newArray);
    };

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <List
                data={todos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default App;
