import { useState } from "react";
import "./index.css";

const todoList = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
];

type TodoProps = {
  id: number;
  name: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoProps[]>(todoList);
  const [newTodo, setNewTodo] = useState("");

  const handleAddItem = () => {
    const newId = Math.floor(Math.random() * 100 + 1);
    setTodos([...todos, { id: newId, name: newTodo }]);
    setNewTodo("");
  };

  const handleDeleteTask = (id: number) => {
    const updatedTaskList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTaskList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>{" "}
              <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
