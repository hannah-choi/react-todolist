import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        { id: v4(), complete: false, task: "Do the Laundry" },
        { id: v4(), complete: false, task: "Go Grocery Shopping" },
        {
            id: v4(),
            complete: false,
            task: "Finish reading 'The Progmatic Programmer'",
        },
    ]);

    const addTodo = newText => {
        setTodos([...todos, { id: v4(), task: newText, complete: false }]);
    };

    const completeTodo = (id, status) => {
        setTodos(
            todos.map(item =>
                item.id === id ? { ...item, complete: status } : item
            )
        );
    };

    const deleteTodo = id => {
        let newArray = Array.from(todos);
        setTodos(newArray.filter(item => item.id !== id));
    };

    const updateTodo = (id, newValue) => {
        setTodos(
            todos.map(item =>
                item.id === id ? { ...item, task: newValue } : item
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ addTodo, deleteTodo, updateTodo, completeTodo, todos }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
