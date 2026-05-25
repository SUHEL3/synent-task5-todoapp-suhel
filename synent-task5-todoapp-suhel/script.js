let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

let tasks = [];

function addTask(){

    if(taskInput.value == ""){
        alert("Enter a task");
        return;
    }

    tasks.push(taskInput.value);

    showTasks();

    saveTasks();

    taskInput.value = "";

}

function showTasks(){

    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        let li = document.createElement("li");

        li.innerHTML = `
        
        ${tasks[i]}
        
        <button onclick="deleteTask(${i})">Delete</button>

        `;

        li.onclick = function(){
            li.classList.toggle("done");
        }

        taskList.appendChild(li);

    }

    taskCount.innerText = "Total Tasks : " + tasks.length;

}

function deleteTask(index){

    tasks.splice(index,1);

    showTasks();

    saveTasks();

}

function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){

    let data = localStorage.getItem("tasks");

    if(data){
        tasks = JSON.parse(data);
        showTasks();
    }

}

loadTasks();