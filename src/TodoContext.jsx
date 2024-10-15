import React, { createContext, useState } from 'react';

// Create Context
export const TodoContext = createContext();

export const TodoProvider= ({ children }) => {
    const [todos, setTodos] = useState([]);

    // Add a new todo
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    // Remove a todo by index
    const removeTodo =(index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    );
};