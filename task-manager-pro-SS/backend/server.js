const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({message: "Deleted"});
});

app.listen(5001, () => console.log("Server running on 5001"));
