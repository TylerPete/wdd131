const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", showMenu)
const navMenu = document.querySelector("#navigation");

const currentYear = document.querySelector(".current-year");
const today = new Date();
currentYear.textContent = `${today.getFullYear()}`;


window.addEventListener("resize", () => {
    if (window.innerWidth >= 640)
    {
        if (navMenu.classList.contains("open"))
        {
            navMenu.classList.remove("open");

        }
        if (menuButton.classList.contains("x"))
        {
            menuButton.classList.remove("x");
        }
    }
});

function showMenu() {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("x");
}

// const tableResetButton = document.querySelector("#table-reset-button");