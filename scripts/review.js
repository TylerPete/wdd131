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

//code for display the number of submissions
let numSubmits = Number(localStorage.getItem("numSubmits-ls")) || 0;

const numReviewsElement = document.querySelector("#numReviews");
numReviewsElement.textContent = `${numSubmits}`;