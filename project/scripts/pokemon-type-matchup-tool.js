const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", showMenu)
const navMenu = document.querySelector(".navigation");

const typeIcons = document.querySelectorAll(".type-icon");
const iconArray = Array.from(typeIcons);
iconArray.forEach(icon => {
    icon.addEventListener("click", function() {
        numIconsSelected = document.getElementsByClassName("selected").length;

        if (icon.classList.contains("selected"))
        {
            icon.classList.toggle("selected");
        }
        else
        {
            if (numIconsSelected < 2)
            {
                icon.classList.toggle("selected");
            }
        }
    });
});

function showMenu()
{
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
}

