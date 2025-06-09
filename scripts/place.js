function calculateWindChill(temp, windSpeed) {
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temp * (windSpeed ** 0.16));

    return chill;
}

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
let dateLastModified = new Date(document.lastModified);

year.textContent = `${today.getFullYear()}`;
lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat("en-US",
    {
        dateStyle: "short", timeStyle: "medium"
    }).format(dateLastModified)}`;

const tempElement = document.querySelector("#temperature-number");
const tempNum = parseFloat(tempElement.textContent);

const windElement = document.querySelector("#wind-number");
const windNum = parseFloat(windElement.textContent);

let windChillTemp;

if (tempNum >= 50 || windNum < 3) {
    windChillTemp = "N/A";
} else {
    let windChillNum = calculateWindChill(tempNum, windNum).toFixed(1);
    windChillTemp = "" + windChillNum + " °F";
}

const windChillElement = document.querySelector("#wind-chill");
windChillElement.textContent = windChillTemp;