import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodos = async () => {
    const response = await fetch("http://localhost:5001/todos");
    const todoArray = await response.json();
    console.log(todoArray);
    setTodos(todoArray);
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <div>
      <table className="table m-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
