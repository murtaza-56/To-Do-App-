let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = function(){
    showTasks();
}

function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    showTasks();
}

function showTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">X</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function deleteTask(index){
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function editTask(index){
    let newTask = prompt("Edit task:", tasks[index]);

    if(newTask !== null && newTask !== ""){
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showTasks();
    }
}