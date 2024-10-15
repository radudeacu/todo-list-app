import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoInput = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleAddTodo = () => {
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default TodoInput;