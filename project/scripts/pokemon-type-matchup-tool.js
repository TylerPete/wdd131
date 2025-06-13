const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", showMenu)
const navMenu = document.querySelector(".navigation");

function showMenu()
{
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
}