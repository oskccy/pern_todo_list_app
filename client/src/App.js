import React from "react";
import InputTodo from "./components/InputTodo.js";
import ListTodos from "./components/ListTodos.js";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <InputTodo/>
      <ListTodos/>
    </div>
  );
}

export default App;
