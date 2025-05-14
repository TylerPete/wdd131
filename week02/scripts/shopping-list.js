//NOT WORKING YET

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);
function addToList() {
    const stringEntry = input.value;
    input.value = "";

    const listEntry = document.createElement("li")
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    listEntry.appendChild(span);
    listEntry.appendChild(deleteButton);

    span.textContent = stringEntry;
    deleteButton.textContent = "Delete"
    list.appendChild(listEntry);

    deleteButton.addEventListener("click", list.removeChild(listEntry));
    input.focus();
}