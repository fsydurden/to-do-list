// Select elements from the HTML
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <span class="delete">Delete</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        // Attach a click event listener to the delete button
        li.querySelector(".delete").addEventListener("click", function () {
            taskList.removeChild(li);
        });
    }
}

// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);

// Event listener for adding a task when Enter key is pressed
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
