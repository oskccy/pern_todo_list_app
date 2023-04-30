import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description }
      const response = await fetch('http://localhost:5001/todos', {
        "method":"POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
      })
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className="m-5">
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input className="form-control" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
