// //Check Prime
// function isPrime(num){
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return "Not Prime";
//         }
//     }
//     return "Prime";
// }
// console.log(isPrime(169));

// //LCM
// function LCMorNot(a,b){
//     let smaller = Math.min(a,b);
//     let larger = Math.max(a,b);
//     let big = larger;

//     while(big%smaller !==0){
//         big += larger;
//     }
//     return big;
// }
// console.log(LCMorNot(18,12));

// //GCD
// function GCD(a,b){
//     while(b!==0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// console.log(GCD(48,18));