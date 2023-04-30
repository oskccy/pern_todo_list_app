const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/dbconfig.js");

app.use(cors());
app.use(express.json());

// add todos
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newItem = await pool.query(
      "INSERT INTO todo(description) VALUES($1) RETURNING *;",
      [description]
    );
    res.json(newItem.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo;");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
});

// get specific todo
app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const listItem = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(listItem.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newTodo = req.body.description;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [newTodo, id]
    );
    res.json("Todo was updated!");
  } catch (error) {
    console.error(error);
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo deleted!");
  } catch (error) {
    console.error(error);
  }
});

// delete all todos
app.delete("/todos", async (req, res) => {
  try {
    const deleteAllTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id > 0 RETURNING *;"
    );
    res.json("Todos cleared!");
  } catch (error) {
    console.error(error);
  }
});

app.listen(5001, () => {
  console.log("Server has started on PORT: 5001");
});

/*
assigning variable called express,
to the return value of calling 
require('express'). calling
that returns express's module.exports
value, which is a function.
*/

/* 
I create new express object
using the previously saved 
express value as a function,
saving it's return value under the
variable: app.
*/

/* 
setting variable cors to the 
return value of require('cors').
the value is a function that is called
within a seperated method to apply
middleware to the request processing
pipeline.
*/

/* (applicable to entire codebase)
I used 'const' types for these
variables because I will not be
directly altering their values.
*/

/* 
assigning variable pool
to the module.exports value
of the path provided, which
is the pool object that I defined
in dbconfig.js.
*/

/* 
the express .listen() method
is used to start a server on
a local port of my choice,
I chose port number
5001 because there is no 
conflicting traffic on macOS 
computers there.

second parameter is a callback
function that gets called if
the app can sucessfully listen
on the designated port.

the method is called so the 
server can listen on that
port for any client requests.
*/

/* 
here I used the .use() method
built into express. .use() mounts
middleware into an express app.
Because I enabled CORS, 
the browser will not block the 
response from the server, even 
though the client and server are 
on different domains.
*/

/* 
utilising the .use() method again.
this allows the middleware to request
body data in the form of Javascript
Object Notation.
*/
