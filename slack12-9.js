//Guess the Number Game Write a program where the computer picks a random number between 1 and 10, and the user has to guess the number. The program should keep asking for guesses until the correct number is guessed. Use a while loop for repeated guesses.
// function randomNum(num){
//     for(let i= Math.floor(Math.random()*10)+1;i <= 10;i++){
//         const random = i;
//         if(random==num){
//             console.log("The number is right");
//         }
//         else{
//             console.log("The number is wrong");
//         }
//         return i;
//     }
// }
// console.log(randomNum(7));


//
const readline = require('node:readline');
const uin = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let userName = '';  // Declare the variable to store the name
uin.question(`What's your name?`, input => {
  userName = input;  // Store the input in the userName variable
  console.log(`Name saved!`);
  uin.close();
  // You can now use the userName variable wherever needed
  console.log(`The name you entered is: ${userName}`);
});