import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: input,
      completed: false,
    };
    setTodos(Array.from(todos).concat(newTodo));
    setInput("");
  }

  function handleComplete(id) {
    setTodos(
      todos.map((todoEl) => {
        if (todoEl.id === id) {
          return {
            ...todoEl,
            completed: !todoEl.completed,
          };
        } else {
          return todoEl;
        }
      })
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todoEl) => todoEl.id !== id));
  }

  return (
    <main>
      <header>
        <h1>ToDo List</h1>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleSubmit} className="add-button">
          Add
        </button>
      </header>
      <ul>
        {todos.map((todo) => (
          <Task
            {...todo}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            key={todo.id}
          />
        ))}
      </ul>
    </main>
  );
}
