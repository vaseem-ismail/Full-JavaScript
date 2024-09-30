// Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant.
// 2. Given three numbers a, b, c print the maximum number amongst the three.
// a =10, b = 30, c = 5
// print 30
// 3. Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
// if n = 4, print the first 4 odd numbers 1 3 5 7
// 4. If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.
// Day 1: 5%
// Day 2: 7% (5% + 2%)
// Day 3: 9% (7% + 2%)
// ...
// Day 10: Calculate this using a loop.
// Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. The challenge is to use a single loop to accumulate the total discount percentage over the 10 days.
// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse
// 30
// 25
// 20
// 15
// 10

// //1
// function checkVowels(n){
//     switch(n){
//         case "a":
//             console.log("the given character is vowel");
//             break;
//         case "e":
//             console.log("the given character is vowel");
//             break;
//         case "i":
//             console.log("the given character is vowel");
//             break;
//         case "o":
//             console.log("the given character is vowel");
//             break;
//         case "u":
//             console.log("the given character is vowel");
//             break;
//         default:
//             console.log("The given character is consonant");
//             break;
//     }
// }
// checkVowels("o");

// //2
// function maxNumber(a,b,c){
//     if(a>b && a>c){
//         console.log("a="+a);
//     }
//     else if(b>a && b>c){
//         console.log("b="+b);
//     }
//     else{
//         console.log("c="+c)
//     }
// }
// maxNumber(10,5,20);


// //3
// function lastNum(n){
//   for(i=1;i<=n;i++){
//     if(i%2==1){
//         console.log(i);
//     }
//   }
// }
// lastNum(10);

// //4 
// function discountVal(a,b,c){
//   let i = 1;
//   while(i<=c){
//     a+=b;
//     i++;
//     console.log(a+"%");
//   }
//   console.log("the discount after 10 days",a+"%");
// }
// discountVal(5,2,15);


// //5
// function printAllMultiplesOf5Bet(a, b){
//     while(b>=a){
//         if(b%5==0){
//             console.log(b);
//         }
//       b--;
//     }
// }
// printAllMultiplesOf5Bet(10,30);

