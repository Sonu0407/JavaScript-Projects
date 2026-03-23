document.addEventListener("DOMContentLoaded", () => {
  // step one grab the elements
  const taskInput = document.getElementById("todo-input");
  const taskAddButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("todo-list");

  // step two find a way to input tasks

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // tasks goes here

  // send each task to renderTask so it display when screen is loaded
  tasks.forEach((task) => renderTask(task));

  taskAddButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // check if the taskText is empty or what
    if (taskText === "") return;

    // create an object and add task to the tasks array
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    // now add the taskText
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = ""; // clear input
    console.log(tasks);
  });

  // render tasks when documentpageis loaded
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id); // we are passing on the id to this current task from newTask id.

    // if task is completed then add a classname to it
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `;

    // add eventlistener for toggling the task
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;
      console.log(li.classList.toggle("completed"));
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id); // this means which task you click will be not be present in tasks list which are true those are basically leaving the equal task.id which are not equal to current task.id will be in the new array.
      li.remove();
      saveTasks();
    });

    taskList.appendChild(li);
  }

  // step three to save tasks to localstorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
