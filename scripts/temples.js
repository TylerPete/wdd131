const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
let dateLastModified = new Date(document.lastModified);

year.textContent = `${today.getFullYear()}`;
lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "short", timeStyle: "medium"
    }).format(dateLastModified)}`


const navList = document.querySelector(".navigation");
const menuDiv = document.querySelector(".menu-title");

const button = document.querySelector("#menu");

button.addEventListener("click", function () {
    navList.classList.toggle("open");
    menuDiv.classList.toggle("open-menu-title");
});