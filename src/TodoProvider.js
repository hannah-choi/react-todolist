import React, { useState, useContext, createContext } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext(TodoProvider);
export const useTodo = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        { id: v4(), task: "Todo1", completed: false },
        { id: v4(), task: "Todo2", completed: true },
        { id: v4(), task: "Todo3", completed: true },
        { id: v4(), task: "Todo4", completed: false },
    ]);

    const addTodo = newTodo => {
        setTodos([...todos, { id: v4(), task: newTodo, completed: false }]);
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (id, newValue) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, task: newValue } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, deleteTodo, updateTodo }}
        >
            {children}
        </TodoContext.Provider>
    );
}
