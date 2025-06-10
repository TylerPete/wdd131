const productSelect = document.querySelector("#product");

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
let dateLastModified = new Date(document.lastModified);

year.textContent = `${today.getFullYear()}`;
lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "short", timeStyle: "medium"
    }).format(dateLastModified)}`;