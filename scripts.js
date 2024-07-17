const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

showTasks();

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);

        taskInput.value = "";

        saveTasks();

    } else {
        alert("Please enter a task!");
    }
}

addButton.addEventListener('click', addTask);

function createTaskElement(task) {
    const listItem = document.createElement("li");

    listItem.innerHTML = task;

    taskList.appendChild(listItem);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    listItem.appendChild(span);
}

taskList.addEventListener('click', function(e) {
        if (e.target.tagName == "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName == "SPAN") {
            e.target.parentElement.remove();
        }
        saveTasks();

    }, false);

function saveTasks() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTasks() {
    taskList.innerHTML = localStorage.getItem("data");
}