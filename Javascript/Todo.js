<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To-Do List</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    #todo-list {
        margin-top: 20px;
    }
    input[type="text"] {
        padding: 8px;
        width: 200px;
    }
    button {
        padding: 8px 15px;
        margin-left: 5px;
        cursor: pointer;
    }
</style>
</head>
<body>

<h2>To-Do List</h2>

<input type="text" id="todo-input" placeholder="Enter task...">
<button onclick="addTodo()">Add</button>

<ul id="todo-list">
    <!-- To-Do items will be appended here -->
</ul>

<script>
    // Function to add a new to-do item
    function addTodo() {
        var input = document.getElementById("todo-input");
        var task = input.value;
        if (task.trim() !== "") {
            var todoList = document.getElementById("todo-list");
            var newItem = document.createElement("li");
            newItem.textContent = task;
            todoList.appendChild(newItem);
            input.value = "";
        } else {
            alert("Please enter a task!");
        }
    }
</script>

</body>
</html>
