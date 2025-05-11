//meow

const year = document.querySelector("#currentyear");
const lastModifiedDate = document.querySelector("#lastModified");

const today = new Date();

year.textContent = `${today.getFullYear()}`;
lastModifiedDate.textContent = `Last Modification: ${new Intl.DateTimeFormat("en-US", 
{
    dateStyle: "short", timeStyle: "medium"
}).format(today)}`