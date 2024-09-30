// //1
// calculateArea();
// greetUser();

// function calculateArea() {
//  const radius = 5;
//  let area;
//  area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
// var userName = "John";
//  console.log(userName);
// }



// //2=
// let count = 100;
// while (count > 0) {
//     console.log("Counting down: " + count);
//  count--;

// }


// //3
// let temperature = 30;if (temperature >= 30) {
//     console.log("It's cold outside.");
//    } else {
//     console.log("It's warm outside.");
//    }


// //4
// checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);function checkNumber(num) {
//   if (num < 0){
//     console.log("Negative");
// }
//   else if (num > 0) {
//     console.log("Positive");
//   } else {
//     console.log("Zero");
//   }
// }


// //5
// function sumNumber(n){
//     let i=0;
//     let store=0;
//     while(i<=n){
//         store += i;
//         i++;
//     }
//     return store;
// }
// console.log(sumNumber(3));


// //6
// function calculateFactorial(n) {
//     let i = 1;
//     let fact = 1;
//     while (i <= n) {
//         //  fact *= i;
//         fact = fact * i;
//         i++;
//     }
//     console.log(fact);
// }
// calculateFactorial(5);



// //Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.
// function printEvenNumbers(n){
//     let i=1;
//     while(i<=n){
//       if(i%2==0){
//         console.log(i);
//       }
//         i++;
//     }
// }
// printEvenNumbers(5);


// // Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
// function sumNumbers(n) {
//   let sum = 0;
//   let i = 1;  while (i <= n) {
//     sum += i;
//     i++;
//   } 
//    return sum;
// }
// console.log(sumNumbers(10));


// //Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules.
// function divisibleNum(num){
//   if(num%3==0){
//     console.log("It is divisible by 3");
//   }
//   else if(num%5==0){
//     console.log("It is divisible by 5");
//   }
//   else if(num%(3*5)==0){
//     console.log("It is divisible by 3 an 5");
//   }
//   else{
//     console.log("It is not divisible by 3 and 5");
//   }
// }
// divisibleNum(2);


// //Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week
// function getDayName(num){
//   switch(num){
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//        console.log("Wednesday");
//        break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;
//     default:
//       console.log("Please give valid number between 1-7");
//       break;
//   }

// }
// getDayName(1);


// // Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// function printMultiplicationTable(n,r){
//   for(i=1;r>=i;r--){
//     console.log(n+"*"+r+"="+n*r);
//   }
// }
// printMultiplicationTable(5,6);


// //Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.
// let i=0;
// while(i<=10){
//    console.log("The current lap is",i);
//    i++;
// }


// //A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.
// let maxCharge = 100;
// let warning = 20;
// while(maxCharge>warning){
//   console.log("The Battery level is",maxCharge);
//   maxCharge-=5;
// }
// console.log("Battery is low");


// //A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.
// function userControl(direction){
//   switch(direction){
//     case "North":
//       console.log("The robot is in North Direction");
//       break;
//     case "South":
//       console.log("The robot is in South Direction");
//       break;
//     case "East":
//       console.log("The robot is in East Direction");
//       break;
//     case "West":
//       console.log("The robot is in West Direction");
//       break;
//     default:
//       break;
//   }
// }
// userControl("East");


// //An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.
// for(maxHeight=1000;maxHeight>0;maxHeight-=10){
//   console.log("The flight is in",maxHeight,"ft");
// }
// console.log("The flight is arrived");


// // Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.
// function getRunway(place){
//   switch(place){
//     case "Russia":
//       console.log("Enter the runway 1");
//       break;
//     case "Dubai":
//       console.log("Enter the runway 2");
//       break;
//     case "USA":
//       console.log("Enter the runway 3");
//       break;
//     case "Japan":
//       console.log("Enter the runway 4");
//       break;
//       default:
//         console.log("You are not allowed to land here");
//   }
// }
// getRunway("USA");


// //Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.
// let maxAltitude = 1000;
//  for(perTimeInterval = maxAltitude/10;perTimeInterval<=maxAltitude;perTimeInterval+=100){
//   console.log(perTimeInterval);
//  }


//  //Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
// let train_departures = [10, 15, 7, 20, 5];
// let shortTime = Math.min(...train_departures);
// console.log(shortTime);


// //Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
// let seats = [1, 0, 1, 1, 0, 0, 1, 0];
// let store = 0;
//     for(i=0;i<=seats.length-1;i++){
//       if(i%2==0){
//           store += 1;
//       }
//     }
//     console.log(store);


// //Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.
// let soldiers = [120, 300, 250, 180, 150];
// let maxNumber = Math.max(...soldiers);
// console.log(maxNumber);


// //Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
// let populations = [50, 60, 70, 80, 90];
// let average = 0;
//    for(i = 0;i<=populations.length-1;i++){
//      average += populations[i];
//    }
//    console.log("The average value of 5 yrs",average/populations.length);


// //Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.
// let water_levels = [30, 50, 20, 40, 60];
// let lowWater = Math.min(...water_levels);
// console.log(lowWater);


// //Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.
// let festival = [30, 15, 45, 10, 25];
// let closeFest = Math.min(...festival);
// console.log("The closest festival in",closeFest);

// let landing_times = [14, 15, 12, 18, 20];
// let duplicate_found = false;
// // Loop through each element and compare with the rest
// for (let i = 0; i < landing_times.length; i++) {
//     for (let j = i + 1; j < landing_times.length; j++) {
//         if (landing_times[i] === landing_times[j]) {
//             duplicate_found = true;
//             console.log(`Duplicate landing time found: ${landing_times[i]}`);
//             break;
//         }
//     }
//     if (duplicate_found) break;
// }

// if (!duplicate_found) {
//     console.log("No duplicate landing times found.");
// }


// //Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.
// let temperatures = [75, 80, 72, 85, 90];
//   for(i=0;i<=temperatures.length-1;i++){
//     if(temperatures[i]>80){
//         console.log(temperatures[i]);
//     }
//   }


// //Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.
// let students_per_route = [45, 55, 30, 60, 40];
// totBus = 0;
// for(i=0;i<=students_per_route.length-1;i++){
//     if(students_per_route[i]>50){
//        let values = students_per_route[i]%50;
//        totBus += 1;
//        if(values<=50){
//         totBus += 1;
//        }
//     }
    
//     else{
//         totBus += 1;
//     }
// }

// console.log(totBus);


// //You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.
// let weeklyExp = [100,200,150,170,100,200,250];
// let store = 0;
//   for(i=0;i<=weeklyExp.length-1;i++){
//       store += weeklyExp[i];
//   }
//   console.log(store);


// //You are given an array of student grades. Write a function that calculates the average grade.
// let grades = [100,99,35,56,59];
// let store = 0;
// for(i=0;i<=grades.length-1;i++){
//     store += grades[i];
// }
// console.log(store/grades.length);

// //You have an array of people ages. Write a function that filters out people who are 18 years old or older.
// let peopleAge =[18,17,16,19,20];
// for(i=0;i<=peopleAge.length-1;i++){
//     if(peopleAge[i]>=18){
//         console.log(peopleAge[i]);
//     }
// }


// //You have an array of integers. Write a function that returns the count of the even numbers in the array.
// let integers = [1,2,3,4,5,6,7,8,9,10];
//  for(i=0;i<=integers.length-1;i++){
//     if(integers[i]%2==0){
//         console.log(integers[i]);
//     }
//  }


// //Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.
// let colors = ["orange","pink"];
// colors.push("Green");
// console.log(colors);


// //Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal
// let fruits = ["banana","orange","apple","guava","grapes"];
// fruits.shift();
// console.log(fruits);


// //Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.
// let sports = ["kabaddi","cricket"];
// sports.unshift("hockey","batminton","running");
// console.log(sports);


// //Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.
// let index = ["computer","laptop","mouse"];
// let model = index.indexOf("laptop");
// console.log(model);


// //Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.
// let techString = "HTML-CSS-JavaScript";
// let techArray = techString.split("-");
// console.log(techArray);


// //Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse order. Print the reversed array.
// let poping = ["mohamed", "vaseem", "ismail"];
// let str2 = [];
// while (poping.length > 0) {
//     let str1 = poping.pop();
//     str2.push(str1);
// }
// console.log(str2);

// //Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.
// let arrAy = ["banana","orange","apple","guava","mango"]
// // let  arr1 = arrAy.join(",");//Join function is used to join the seperate string into one string and the "," inbetween double quotes in between of each element.
// console.log(arrAy);
// console.log(arrAy.join(","));//same process join does


// //Write a program to create an object car with properties make, model, and year. Print the model of the car.
// let car ={
//   make: "dodge",
//   model: "hellcat_challenger",
//   year: 2015
// }
// console.log(car.model);


// //Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.
// let book1 = {
//   title : "Naruto shippuden",
//   author : "Masashi kishimoto"
// }
// let book2 = {
//   title : "Jujutsu kaisen",
//   author : "gege Akutami"
// }
// console.log(book1.title);


// //You have an array of 4 objects, each representing a car with properties brand and model. Write a program to add a new property year to each object and assign a value, then print the updated array.
// let cars = [
//   { brand: "Toyota", model: "Corolla" },
//   { brand: "Dodge", model: "Hellcat" },
//   { brand: "Ford", model: "Mustang" },
//   { brand: "Chevrolet", model: "Camaro" }
// ];

// let yrs = ["1998","2015","2012","2000"]     //wanna to learn this briefly myself ASAP
//  cars.forEach((car,index) => {
//    car.year=yrs[index];
//  })

//  console.log(cars);

// //You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.
// let prodArr = [
//   {name : "laptop",price : 1000},
//   {name : "mobile",price : 500},
//   {name : "nechband",price : 200}
// ]
// let i = 0
// prodArr.forEach(pricedet=> {  //this also small clarification
//     i+=pricedet.price;
// })
// console.log(i);

//   You have an array of 5 objects, each representing a student with properties name and grade. Write a program to find and print the name of the student whose grade is "A".
// students = [
//   { name: "Amar", grade: "A" },
//   { name: "Akbar", grade: "B" },
//   { name: "Anthony", grade: "A" },
//   { name: "kalai", grade: "C"},
//   { name: "Mohamed", grade: "A"},
// ]
// students.forEach(student => {//successfully Understand
//   if(student.grade === "A"){
//     console.log(student.name);
//   }
// });

// //Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
// let scores = [50,40,30,60,70];
// let add = 0;
// for(i=0;i<=scores.length-1;i++){
//   add += scores[i];
// }
// console.log(add/scores.length);

// //You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.
// let testScores = [100,20,10,3,9];
// let maxValue = Math.max(...testScores);
// console.log(maxValue);


// //Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.
// let decimalNumbers = [5.5, 12.75, 3.25];
// function decimalToBinary(decimal) {
//     let integerPart = Math.floor(decimal);
//     let fractionalPart = decimal - integerPart;
//     let integerBinary = integerPart.toString(2);
//     let fractionalBinary = "";
//     while (fractionalPart !== 0 && fractionalBinary.length < 8) {
//         fractionalPart *= 2;
//         if (fractionalPart >= 1) {
//             fractionalBinary += "1";
//             fractionalPart -= 1;
//         } else {
//             fractionalBinary += "0";
//         }
//     }
//     return integerBinary + (fractionalBinary ? "." + fractionalBinary : "");
// }
// decimalNumbers.forEach(function(number) {
//     console.log("Decimal:", number, "-> Binary:", decimalToBinary(number));
// });


// //Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
// function twoBoolean(bool1, bool2) {
//   for (i = 0; i <= bool1.length - 1; i++) {

//     if (bool1[i] === bool2[i]) {
//       console.log("true");
//     }
//     else {
//       console.log("false");

//     }
//   }
// }
// let bool1 = [true, false, true];
// let bool2 = [false, true, true];
// twoBoolean(bool1, bool2);

// //Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.
// let oldPrice = [10,20,300,10];
// let newPrice = [100,200,400,20];
//  for(i=0;i<=oldPrice.length-1;i++){
//   let value = newPrice[i]/oldPrice[i];
//   console.log("The percentage increases as",Math.floor(value)+"%");
//  }

// //Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.
// function unionOfSets(set1, set2) {
//   const unionSet = new Set([...set1, ...set2]);
//   return Array.from(unionSet);
// }
// const set1 = [1, 2, 3, 4, 5];
// const set2 = [4, 5, 6, 7, 8];

// const unionResult = unionOfSets(set1, set2);
// console.log("Union of the two sets:", unionResult);


// //Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.
// function findMode(numbers) {
//   const frequency = {};
//   for (const num of numbers) {
//       frequency[num] = (frequency[num] || 0) + 1;
//   }
//   let mode = numbers[0];
//   let maxCount = numbers.length;
//   for (const num in frequency) {
//       if (frequency[num] > maxCount) {
//           maxCount = frequency[num];
//           mode = num;
//       }
//   }

//   return mode;
// }
// const numbers = [4, 1, 2, 2, 3, 4, 4, 1, 2, 3];

// const mode = findMode(numbers);
// console.log(`The mode is: ${mode}`);


// //Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.
// let timeInMinutes = [20,40,60,10,5];
//    for(i=0;i<=timeInMinutes.length-1;i++){
//       if(timeInMinutes[i]>=60){
//         console.log(timeInMinutes[i]/60,"Hours left");
//       }
//       else{
//         console.log(timeInMinutes[i],"Minutes left");
//       }
//    }


// //Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.
// details = [
//   { principal : 10000, rateOfInterest : 5, noOfYears: 4},
//   { principal : 15000, rateOfInterest : 4, noOfYears: 3},
//   ]
//   details.forEach(element => {
//     let simInt = (element.principal*element.noOfYears*element.rateOfInterest)/100;
//   console.log(simInt);
//   });


// // You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.
// students = [
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//   { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
//   ]
//   students.forEach(mark => {
//     let totMarks = mark.subject1Marks+mark.subject2Marks+mark.subject3Marks;
//     console.log(totMarks);
//   });


// //You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
// let tenObjects = [
//   {keyrent: 1000, grocerries: 200, utilities: 100},
//   {keyrent: 2000, grocerries: 400, utilities: 200},
//   {keyrent: 3000, grocerries: 600, utilities: 300},
//   {keyrent: 4000, grocerries: 800, utilities: 400},
//   {keyrent: 5000, grocerries: 1000, utilities: 500},
//   {keyrent: 6000, grocerries: 1200, utilities: 600},
//   {keyrent: 7000, grocerries: 1400, utilities: 700},
//   {keyrent: 8000, grocerries: 1600, utilities: 800},
//   {keyrent: 9000, grocerries: 1800, utilities: 900},
//   {keyrent: 10000, grocerries: 2000, utilities: 1000},
// ];
// let totExp = [];
// tenObjects.forEach(value => {
//   let eachVal = value.keyrent+value.grocerries+value.utilities;
//   let pushEle = totExp.push("Total Expences:",eachVal);
//   console.log(pushEle);

// });
// console.log(totExp);
