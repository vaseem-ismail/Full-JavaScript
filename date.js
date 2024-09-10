// Using the Date object
let currentDate = new Date();
console.log("Current Date: " + currentDate);

// Get specific parts of the date
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-indexed
let day = currentDate.getDate();

console.log("Year: " + year);
console.log("Month: " + month);
console.log("Day: " + day);

// Using the Math object
let number = 16;
let squareRoot = Math.sqrt(number);

console.log("Square root of " + number + " is " + squareRoot);
