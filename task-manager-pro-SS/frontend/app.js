async function addTask(){
  const task = document.getElementById("task").value;
  await fetch("http://localhost:5001/tasks", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({task})
  });
  loadTasks();
}

async function loadTasks(){
  const res = await fetch("http://localhost:5001/tasks");
  const data = await res.json();
  document.getElementById("list").innerHTML =
    data.map((t,i)=>`<li>${t.task} <button onclick="del(${i})">X</button></li>`).join("");
}

async function del(i){
  await fetch("http://localhost:5001/tasks/"+i, {method:"DELETE"});
  loadTasks();
}

loadTasks();
