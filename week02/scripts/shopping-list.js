//NOT WORKING YET

const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("#add-item");

function addToList() {
    const stringEntry = input.value;
    input.value = "";

    const listEntry = document.createElement("li")
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = stringEntry;
    deleteButton.textContent = "Delete"

    list.appendChild(listEntry);
    listEntry.appendChild(span);
    listEntry.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        list.removeChild(listEntry)
    });
    input.focus();
}

addButton.addEventListener("click", addToList);