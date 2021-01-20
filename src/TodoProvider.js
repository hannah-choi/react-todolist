import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const todoContext = createContext();
export const useTodo = () => useContext(todoContext);

export default function TodoProvider() {
    const [todos, setTodos] = useState([
        { id: v4(), complete: false, task: "Do the Laundry" },
        { id: v4(), complete: false, task: "Go Grocery Shopping" },
        {
            id: v4(),
            complete: false,
            task: "Finish reading 'The Progmatic Programmer'",
        },
    ]);

    const addTodo = text => {
        setTodos([...todos, { id: v4(), task: text, complete: false }]);
    };

    const completeTodo = (id, status) => {
        setTodos(
            todos.map(item =>
                item.id === id
                    ? { id: item.id, task: item.task, complete: status }
                    : item
            )
        );
    };

    const deleteTodo = id => {
        let newArray = Array.from(todos);
        newArray = newArray.filter(item => (item.id = !id));
        setTodos(newArray);
    };

    const updateTodo = (id, newValue, status) => {
        setTodos(
            todos.map(item =>
                item.id === id
                    ? { id: item.id, task: newValue, complete: status }
                    : item
            )
        );
    };

    return (
        <TodoProvider
            value={{ addTodo, deleteTodo, updateTodo, completeTodo, todos }}
        ></TodoProvider>
    );
}
