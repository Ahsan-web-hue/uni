import React, { useState } from 'react';

const TodoApp = () => {
  // State for storing the list of todos and the current input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue(''); // Clear input after adding
    }
  };

  // Function to handle toggling the completed state of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to handle removing a todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new todo" 
        style={{ width: '80%', padding: '8px', marginRight: '10px' }} 
      />
      <button onClick={addTodo} style={{ padding: '8px' }}>Add Todo</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '5px 0', textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer', flex: 1 }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px', color: 'red' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
