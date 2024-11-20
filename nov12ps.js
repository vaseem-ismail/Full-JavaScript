// function printStar(n) {
//     for(let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);

//     }

//     // Reverse print
//     for(let i = n - 1; i >=1; i--) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }

// }
// printStar(10)

// function getSpaces(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     return outputStr;
// }

// function getNumSequence(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += i + " ";
//     }
//     return outputStr;
// }

// function printStar(n) {
//     // Upper part of the diamond
//     for (let i = 1; i <= n; i++) {
//         let output = ' '.repeat(n - i);    // Create spaces
//         for (let j = 1; j <= i; j++) {
//             output += j + ' ';             // Add numbers
//         }
//         console.log(output);
//     }

//     // Lower part of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         let output = ' '.repeat(n - i);    // Create spaces
//         for (let j = 1; j <= i; j++) {
//             output += j + ' ';             // Add numbers
//         }
//         console.log(output);
//     }
// }
// printStar(10)

// function starPrinting(n){
//     for(i=1;i<=n;i++){
//         let store = ' '.repeat(n-1);
//         for(j=1;j<=i;j++){
//             store += j + ' ';
//         }
//         console.log(store);
//     }
//     for(i=n-1;i>=1;i--){
//         let store = ' '.repeat(n-1);
//         for(j=1;j <= i; j++){
//             store += j + ' ';
//         }
//         console.log(store);
//     }
// }
// starPrinting(5);

// function digitSumFact(n) {
//     let num = n; 
//     let sum = 0;
//     while ( num > 0) {
//         let digit = num % 10;
//         sum += factorial(digit);
//         num = Math.trunc(num / 10); 
//     }

//     if(n == sum) {
//         console.log("Strong");
//     }
//     else {
//         console.log("Not Strong");
//     }
// }

// function factorial(n) {
//     let fact = 1;
//     for (let i  = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// digitSumFact(5);
console.log(Math.trunc(143/10));