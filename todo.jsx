import React, { useState } from 'react'
import "../css/todo.css"

function Todo(){ 
const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      if (editId !== null) {
        setTodos(
          todos.map((todo, idx) =>
            idx === editId ? { ...todo, text: input } : todo
          )
        );
        setEditId(null);
      } else {
        setTodos([...todos, { text: input }]);
      }
      setInput("");
    }
  };

  const editTodo = (index) => {
    setInput(todos[index].text);
    setEditId(index);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTodo}>{editId !== null ? "Update" : "Add"}</button>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo.text}
            <span>
              <button onClick={() => editTodo(idx)}>Edit</button>
              <button onClick={() => deleteTodo(idx)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Todo     

