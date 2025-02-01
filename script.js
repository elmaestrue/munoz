document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodo(todoText);
            todoInput.value = "";
        }
    });

    function addTodo(text) {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        const span = document.createElement("span");
        span.textContent = text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Confirmation before deleting a todo
        deleteBtn.addEventListener("click", function () {
            const confirmDelete = confirm("Are you sure you want to delete this todo?");
            if (confirmDelete) {
                todoList.removeChild(li);
            }
        });

        editBtn.addEventListener("click", function () {
            const newText = prompt("Edit your todo:", span.textContent);
            if (newText !== null && newText.trim() !== "") {
                span.textContent = newText.trim();
            }
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
