const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

function createTask(text) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <input type="text" id="taskNewInput" value="${text}">
        <button class="update-button">Update</button>
        <button class="delete-button">Delete</button>
    `;

    const newInput = listItem.querySelector("#taskNewInput");
    newInput.setAttribute("readonly",true);

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    const updateButton = listItem.querySelector(".update-button");
    updateButton.addEventListener("click",() =>{
        if (updateButton.innerHTML === "Update"){
            newInput.removeAttribute("readonly",false);
            newInput.focus();
            updateButton.innerHTML = "Save";
        }
        else{
            newInput.removeAttribute("readonly",true);
            updateButton.innerHTML = "Update";
        }
    });
    
    taskList.appendChild(listItem);
}
