import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        { complete: false, task: "Todo1", id: v4() },
        { complete: false, task: "Todo2", id: v4() },
        {
            complete: false,
            task: "Todo3",
            id: v4(),
        },
    ]);

    const addTodo = newText => {
        setTodos([...todos, { task: newText, complete: false }]);
    };

    const completeTodo = (id, status) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, complete: status } : todo
            )
        );
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
            value={{ addTodo, deleteTodo, updateTodo, completeTodo, todos }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;
