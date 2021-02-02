import React, { createContext, useReducer } from "react";
import todoReducer from "../todoReducer";
import { v4 } from "uuid";

export const TodoContext = createContext();

const initialState = {
    todos: [
        { id: v4(), task: "Todo1", completed: false },
        { id: v4(), task: "Todo2", completed: true },
        { id: v4(), task: "Todo3", completed: true },
        { id: v4(), task: "Todo1", completed: false },
    ],
};

export default function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const value = { state, dispatch };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
}
