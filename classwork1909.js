// //Given a number of 7 digits, print the sum of the digits of the number.
// let string = "1234567";
// let stringStore = [];
// let total = 0;
// let splitting = string.split("").map(Number);
// stringStore.push(...splitting);
// console.log(stringStore);
// for (let i = 0; i <= stringStore.length - 1; i++) {
//     total += stringStore[i];
// }
// console.log(total);


//Add the above code in a function digitSum(num) . It should return the sum of the digits of the number.
function digitSum(num){
let store = 0;

while (num > 0) {    
    let split = (num % 10);
    store += split;
    num = Math.floor(num/10);
}
return(store);
}
console.log(digitSum(1010))



// let getArray = [];
// let str = number.toString().split(",").map(Number);
// let str2= getArray.push(str);

// console.log(getArray);

//Given an array of names of people, add the length of the array as the first element in the array.
