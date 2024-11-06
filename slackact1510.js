//L3 Questions
//1.Write a function removeDuplicates(arr) that takes an array and returns a new array with all duplicate elements removed.
//removeDuplicates([1, 2, 3, 3, 4, 5, 5]); // Output: [1, 2, 3, 4, 5]
//2. Write a function secondLargest(arr) that takes an array of numbers and returns the second-largest number in the array.
//secondLargest([5, 1, 9, 3, 7]); // Output: 7
//3. Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forwards and backward). Ignore spaces and case sensitivity.
//isPalindrome("racecar"); // Output: true
//isPalindrome("hello");   // Output: false

//4. Write a function findMissingNumber(arr) that takes an array of consecutive numbers (with one missing) and returns the missing number.
//findMissingNumber([1, 2, 3, 5, 6]); // Output: 4

//5. Write a function findCommon(arr1, arr2) that takes two arrays and returns an array of common elements between the two.
//findCommon([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]

//6. Write a function findDuplicates(arr) that takes an array of numbers and returns a new array of all the numbers that appear more than once.
//findDuplicates([1, 2, 3, 4, 2, 5, 1]);  // Output: [1, 2]

//7. Write a function findIntersection(arr1, arr2) that returns an array containing only the elements that exist in both arr1 and arr2.
//findIntersection([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]

//  //1
//  function removeDuplicates(arr){
//     let type = new Set(arr);
//     console.log([...type]);
//  }
//  removeDuplicates([1,2,3,4,5,4,3]);

// //2
// function secondLargest(arr) {
//     let store = Math.max(...arr);
//     let secondMax = -Infinity;  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== store && arr[i] > secondMax) {
//             secondMax = arr[i];  
//         }
//     }
//     console.log(secondMax);
// }
// secondLargest([1, 2, 3, 10, 12]);

// //3
// function isPalindrome(str){
//     let str2 = "";
//     for(i=str.length-1;i>=0;i--){
//         str2 += str[i];
//     }
//     if(str===str2){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// isPalindrome("modom");

// //4
// function findMissingNumber(arr){
//     let sampArr = [1,2,3,4,5,6,7,8,9,10];
//     let alreadyHave = [];
//     for(i=0;i<=arr.length-1;i++){
//         if(arr[i]!==sampArr[i]){
//             return sampArr[i];
//         }
//         else{
//             alreadyHave += sampArr[i];
//         }
//     }
// }
// console.log(findMissingNumber([1, 2, 3, 5, 6]));

// //5
// function findCommon(arr1, arr2){
//     for(i=0;i<=arr1.length-1;i++){
//         for(j=0;j<=arr2.length-1;j++){
//             if(arr1[i]===arr2[j]){
//                 console.log(arr1[i]);
//             }
//         }
//     }
// }
// findCommon([1,2,3,4],[3,4,5,6]);

// //6
// function findDuplicates(arr) {
//     let seen = {};
//     let duplicates = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (seen[arr[i]]) {
//             if (seen[arr[i]] === 1) {
//                 duplicates.push(arr[i]);
//             }
//             seen[arr[i]]++;
//         } else {
//             seen[arr[i]] = 1;
//         }
//     }
//     return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 4, 2, 5, 1]));

// //7
// function findIntersection(arr1, arr2){
//      for(i=0;i<=arr1.length-1;i++){
//         for(j=0;j<=arr2.length-1;j++){
//             if(arr1[i]===arr2[j]){
//                console.log(arr1[i]);
//             }
//         }
//      }
// }
// findIntersection([1, 2, 3, 4], [3, 4, 5, 6]);