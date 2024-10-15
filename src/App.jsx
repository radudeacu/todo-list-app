import { useState } from 'react';
import './App.css';
import { TodoProvider } from './TodoContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoProvider>
      <div className="App">
        <div className="todo-card">
          <h1>To do List</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
