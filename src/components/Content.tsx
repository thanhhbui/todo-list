import React, { useState } from "react";
import "./Content.css";
import { tokenToString } from "typescript";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Content: React.FC = () => {
  const name: string = "thanhbui";
  const [todo, setTodo] = useState<string>("");
  const [task, setTask] = useState<Array<Todo>>([
    {
      id: 1,
      task: "don nha",
      completed: true,
    },
    {
      id: 2,
      task: "hoc tieng anh",
      completed: false,
    },
  ]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      const newTodo: Todo = {
        id: task.length + 1,
        task: todo,
        completed: false,
      };
      setTask([...task, newTodo]);
      setTodo("");
    }
  };

  const handleToggleTodo = (id: number) => {
        setTask(task.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
  }

  const handleDeleteTodo = (id: number) => {
    setTask(task.filter(todo => todo.id !== id))
  }

  return (
    <div className="container">
      <h1>{name}'s Todo List</h1>
      <input
        className="content-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Add todo"
      />
      <button onClick={handleAddTodo} className="content-btn">
        Add todo
      </button>
      <ul>
        {task.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input onChange={() => handleToggleTodo(todo.id)} type="checkbox" checked={todo.completed} />
            {todo.task} - {todo.completed ? "true" : "false"}
            <button onClick={() => handleDeleteTodo(todo.id)} className="content-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
