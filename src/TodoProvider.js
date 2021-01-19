import React, { createContext, useContext, useState } from "react";

const todoContext = createContext();
export const useTodo = useContext(todoContext);
