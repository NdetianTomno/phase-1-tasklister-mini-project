document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskInput = document.getElementById("new-task-description");
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = taskInput.value.trim();

    if (newTask !== "") {
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = newTask;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        newTaskItem.remove();
      });

      newTaskItem.appendChild(deleteButton);
      taskList.appendChild(newTaskItem);
      taskInput.value = "";
    }
  });
});
