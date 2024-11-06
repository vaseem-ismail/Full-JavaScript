// //Print 1-100 and print multiple value
// function betNum(lastNum){
// for(fNum = 1;fNum<=lastNum;fNum++){
//     if(fNum%3==0 && fNum%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(fNum%3==0){
//         console.log("Fizz");
//     }
//     else if(fNum%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(fNum);
//     }
// }
// }
// betNum(100);

// //2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// function isPrime(num){
    
//     if(num/2==1||num/3==1||num/5==1||num/7==1){
//         console.log(num,"is Prime");
//         return;
//     }
//     if(num%2==0||num%3==0||num%5==0||num%7==0){
//         console.log(num,"is Not Prime");
//         return;
//     }
//     else {
//         console.log(num,"is Prime");
//         return;
//     }
// }
// isPrime(97);

function isPrime(num){
    isPrime = true;
    if(num===2){
      return true;
    }
    else{
        for(i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                return false;
            }
        }
        if(isPrime){
            return true;
        }
    }
}
isPrime(47);

//Given a 2 numbers, find the LCM between the two numbers. 
function checkLCM(num){
    if(num%2==0){
        
    }
}