const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function(element) {
    if (element < LIMIT)
    {
        console.log(element);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

const today = new Date();
options = {weekday: "long"};
let todayString = new Intl.DateTimeFormat("en-US", options).format(today);

console.log(`Today is: ${todayString}`);
console.log("Next six days:");

for (let i = 1; i <= DAYS; i++)
{
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);
    console.log(nextDayString);
}