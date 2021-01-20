import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        { complete: false, task: "Do the Laundry" },
        { complete: false, task: "Go Grocery Shopping" },
        {
            complete: false,
            task: "Finish reading 'The Progmatic Programmer'",
        },
    ]);

    const addTodo = newText => {
        setTodos([...todos, { task: newText, complete: false }]);
    };

    const completeTodo = (id, status) => {
        let newArray = Array.from(todos);
        newArray[id].complete = status;
        setTodos(newArray);
        // setTodos(
        //     todos.map(item =>
        //         item.id === id ? { ...item, complete: status } : item
        //     )
        // );
    };

    const deleteTodo = id => {
        let newArray = Array.from(todos);
        newArray.splice(id, 1);
        setTodos(newArray);
    };

    const updateTodo = (id, newValue) => {
        let newArray = Array.from(todos);
        newArray[id].task = newValue;
        setTodos(newArray);
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
