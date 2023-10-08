//select elements from html
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const tasklist = document.getElementById("taskList");
//function for adding new task
function addTask{
     const taskText = taskInput.value.trim();

     if (taskText !== " ") {
        const li = document.createElement("li");
        li.innerHTML = '
        ${taskText}
        <span class="delete">Delete</span>
    ';
            tasklist.appendChild(li);
            taskInput.value = " ";
            //attack a click event listner to the delete button
            li.querySelector(".delete").addEventListener("click" ,function() {
                tasklist.removeChild(li);   
            });
        
     }
}
//event listner for adding a task
addTaskButton.addEventListener("click" , addTask)
//event listner for adding a task when enter key is pressed
taskInput.addEventListener("key up",function (event) {
    if (event.key == "Enter"){
        addTask();
    }
});   