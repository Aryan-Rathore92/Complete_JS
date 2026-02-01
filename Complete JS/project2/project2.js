let inp = document.querySelector(".upper_input");
let addTaskBtn = document.querySelector(".add_task");
let todoList = document.querySelector(".todo-list");

function createTodo(textTask){
    let lowerdiv = document.createElement("div");
    lowerdiv.classList.add("todo-item");

    let innerh6 = document.createElement("h6");
    innerh6.classList.add("content");
    innerh6.textContent = textTask;

    let innerSave = document.createElement("button");
    innerSave.classList.add("saveBtn");
    innerSave.textContent = "Save";

    let innerDelete = document.createElement("button");
    innerDelete.classList.add("deleteBtn");
    innerDelete.textContent = "Delete";

    lowerdiv.append(innerh6, innerSave, innerDelete);
    todoList.appendChild(lowerdiv);

    innerDelete.addEventListener("click", () => lowerdiv.remove());

    innerSave.addEventListener("click", function(){
        alert("Your To-Do Succesfully Saved! Thank you");
    })
}

addTaskBtn.addEventListener("click", () => {
    if (inp.value.trim() === "") return;
    createTodo(inp.value.trim());
    inp.value = "";
    inp.focus();
});

inp.addEventListener("keydown", e => {
    if (e.key === "Enter") addTaskBtn.click();
});
