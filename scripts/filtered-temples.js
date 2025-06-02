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
    button.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    size: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    size: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    size: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    size: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    size: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    size: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    size: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Winter Quarters Nebraska",
    location: "Omaha, Nebraska, United States",
    dedicated: "2001, April, 22",
    size: 16000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/winter-quarters-nebraska-temple/winter-quarters-nebraska-temple-317.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, May, 27",
    size: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576.jpg"
  },
  {
    templeName: "Chicago Illinois",
    location: "Chicago, Illinois, United States",
    dedicated: "1985, August, 9",
    size: 37062,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403.jpg"
  }
];

function createTempleCardHTML(temple)
{
    let html = `<div class="temple-card">\n<h3>${temple.templeName}</h3>\n<ul>\n`;

    let values = ["location", "dedicated", "size"];
    let listElementArray = values.map(value => value = `<li><span>${value.toUpperCase()}: </span>${temple[value]}</li>`);

    html += `${listElementArray.join("\n")}\n</ul>\n<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">\n</div>`;

    return html;
}

let templeCardsHTMLArray = temples.map(createTempleCardHTML);
let finalHTML = templeCardsHTMLArray.join("\n");

const albumGridElement = document.querySelector(".album-grid");
albumGridElement.innerHTML = finalHTML;

//"Old" Temples Filter and Listener
const oldLink = document.querySelector("#old-link");
oldLink.addEventListener("click", () => {
    let oldTemples = temples.filter(temple => isOldEnough(temple));
    filterCards(oldTemples);
});

//"New" Temples Filter and Listener
const newLink = document.querySelector("#new-link");
newLink.addEventListener("click", () => {
    let newTemples = temples.filter(temple => isNewEnough(temple));
    filterCards(newTemples);
});

//"Large" Temples Filter and Listener
const largeLink = document.querySelector("#large-link");
largeLink.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => isLargeEnough(temple));
    filterCards(largeTemples);
});

//"Small" Temples Filter and Listener
const smallLink = document.querySelector("#small-link");
smallLink.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => isSmallEnough(temple));
    filterCards(smallTemples);
});

//"Home" Filter (show all temple cards)
const homeLink = document.querySelector("#home-link");
homeLink.addEventListener("click", () => {
    filterCards(temples);
})


//Boolean return functions for filter criteria
function isOldEnough(temple) {
    return temple.dedicated.split(",")[0] < 1900;
}

function isNewEnough(temple) {
    return temple.dedicated.split(",")[0] > 2000;
}

function isLargeEnough(temple) {
    return temple.size > 90000;
}

function isSmallEnough(temple) {
    return temple.size < 10000;
}

//Helper function called by event listeners to reset innerHTML of the grid
function filterCards(newTemplesArray) {
    let newTempleCardsHTMLArray = newTemplesArray.map(createTempleCardHTML);
    let newFinalHTML = newTempleCardsHTMLArray.join("\n");

    albumGridElement.innerHTML = newFinalHTML;
}