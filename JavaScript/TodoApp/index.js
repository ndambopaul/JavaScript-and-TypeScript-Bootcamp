function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.setAttribute("onclick", "deleteTask(this)");
    deleteButton.style.marginLeft = "25px";
    deleteButton.style.backgroundColor = "red";

    li.appendChild(deleteButton);
    ul.appendChild(li);

    document.getElementById("taskInput").value = "";
}

function deleteTask(button) {
    button.parentNode.remove();
}
