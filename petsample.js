// function ifChar(n){         //first method for check the variable
//     if(n=="A"||n=="a"){
//        return true;
//     }
//     else{
//        return false;
//     }
// }
// console.log(ifChar("A"));

// function isTrue(num){       //second method for check the varable
//     num.lowerCase();
//     if(num=="a"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(ifChar("A"));

// function someAlp(n){
//     if(n=="d"||n=="D"){
//         return false;
//     }
//     else if(n=="e"||n=="E"){
//         return false;
//     }
//     else if(n=="f"||n=="F"){
//         return false;
//     }
//     else{
//         return true;
//     }   
// }
// console.log(someAlp("D"))
// console.log(someAlp("a"))


// function addNum(num){
// let sum = 0;
//    for(i=0;i<=num.length-1;i++){
//      sum += num[i];
//    }
//    if(sum%3==0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }
// num = [1,2,3,4,5];
// console.log(addNum(num));

// function sumOddNum(number){
//     let store =0;
//     for(i=0;i<=number.length-1;i++){
//     if(number%2!=0){
//         store += number[i];
//     }
// }
// return store
// }
// number=[1,2,3,4,5,6,7];
// console.log(sumOddNum(number));

// function numBetween(num1,num2){  //last comma remove
//     let samArr= [];
//     let sum1 = [];
//     let sum2 = [];
//     while(num1<=num2){
//       samArr += num1 + ",";
//       samArr.pop();
//       num1++;
//     }
//     for(i=0;i<=samArr.length-1;i++){
//        sum1 += samArr[i];
//     }
//     console.log(sum1);
//     for(j=samArr.length-1;j>=0;j--){
//        sum2 += samArr[j];
//     }
//     console.log(sum2);
// }
// numBetween(1,5);

// function sepOddEven(n1,n2){
// let totAr = [];
// let store1 = 0;
// let store2 = 0;
//   while(n1<=n2){
//      if(n1%2==0){
//        store1 += n1 + ",";
//        totAr.push(store1);
//      }

//      else{
//         store2 += n1 + ",";
//         totAr.push(store2);
//      }
//   }
//   console.log(totAr);
// }
// sepOddEven(10,30);



// //Doing some hard questions
// function sumOfPrimes(arr) {
//     for (i = 0; i <= arr.length-1; i++) {
//             if (arr[i] %2 === 0||arr[i]%3===0||arr[i]%5===0) {
//                 console.log("not prime");

//             }
//             else{
//                 console.log("Prime");
//         }
//     }
// }
// let arr = [3,4,5,6,7,8,9];
// console.log(sumOfPrimes(arr)); // Output: 26

//rotate an array
//Input: [1, 2, 3, 4, 5, 6, 7], k = 3Output: [5, 6, 7, 1, 2, 3, 4]

// function exceptNum(k) {
//     let sampArr = [1, 2, 3, 4, 5, 6, 7];            //completed
//     let finArr = [];
//     for (i = k + 1; i <= sampArr.length - 1; i++) {
//         finArr += sampArr[i] + ",";
//     }
//     finArr += sampArr[k] + ",";
//     for (i = 0; i < k; i++) {
//         finArr += sampArr[i] + ",";
//     }
//     finArr = finArr.slice(0, -1);
//     console.log(finArr);
// }
// exceptNum(3);

// //To find the repeating element of an array
// let repArr = [1, 2, 3, 4, 5, 1, 5, 6, 4, 4];
// let useLess = [];
// let store = [];
// for (i = 0; i <= repArr.length - 1; i++) {

//    for (j = 0; j < repArr[i]; j++) {

//       if (repArr[i] !== repArr[j]) {
//          useLess.push(repArr[j]);
//          // console.log("J = ",repArr[i]);
//         }

//       else{
//          // console.log(" ");
//          store.push(repArr[j]);
//         }

//      }

//    for (k = repArr[i+1]; k <= repArr.length - 1; k++) {

//       if (repArr[i] !== repArr[k]) {
//          //  console.log("K = ",repArr[i]);
//          useLess.push(repArr[k]);
//       }

//       else{
//          // console.log(" ");
//          store.push(repArr[k]);
//       }
      
//     }
    
// }
// console.log([store]);
// console.log([useLess]);

// //adding odd add even number in an particular array
// let bothNum = [1,2,3,4,5,6,7,8];
// let evenNum =[];
// let oddNum = [];
// let store1 = 0;
// let store2 = 0;
//      for(i=0;i<=bothNum.length-1;i++){
//         if(bothNum[i]%2==0){
//            evenNum += bothNum[i]+" , ";
//            store1 += bothNum[i];
//         }
//         else{
//            oddNum += bothNum[i]+" , ";
//            store2 += bothNum[i];
//         }
//      }
//      evenNum = evenNum.slice(0,-2);
//      oddNum = oddNum.slice(0,-2);
    
//    //   for(j=0;j<=evenNum.length-1;j++){
//    //      store1 += [evenNum[j]];
//    //   }
     
//    //   for(k=0;k<=oddNum.length-1;k++){
//    //      store2 += [oddNum[k]];
//    //   }
//      console.log(evenNum);
//      console.log(oddNum);
//      console.log(store1);
//      console.log(store2);

// //Store the n number of value in an same array
// let value = [1,2,3,4,5,6,7,8];
// let eNumAdd = [];
// let oNumAdd = [];
//    for(i=0;i<=value.length-1;i++){
//       if(value[i]%2==0){
//          eNumAdd += value[i],", ";
//       }
//       else{
//          oNumAdd += value[i],", ";
        
//       }
//    }
//    console.log(oNumAdd);
//    console.log(eNumAdd);

// //print repating num in an array
// let arr=[1,2,3,4,4,5,5]
// let set_arr=[...new Set(arr)]   // [1,2,3,4,5]
// let result=set_arr[0];
// let max=0;
// for(let i=0;i<set_arr.length;i++) {
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if (set_arr[i]==arr[j]) {
//             count++
//         }
//     }
//     if(count>max){
//         result=set_arr[i]
//         max=count;
//     }
// }
// console.log(result);


// //Testing all the operation 
// var test = ["Mohamed","Gowtham","Vaseem","Immanuvel"];
// var usePop = test.pop();
// var usePush = test.push("Onee-san");
// var useShift = test.shift();
// var useUnshift = test.unshift("Sriram");
// var useJoin = test.join(", ");
// var useSplit = useJoin.split(",");
// var useIndex = test.indexOf("Gowtham");
// var findLength = test.length;
// console.log(usePop);
// console.log(test);
// console.log(useShift);
// console.log(test);
// console.log(useJoin);
// console.log(useSplit);
// console.log(useIndex);
// console.log(findLength);




// //condition sums
// function chooseNum(num){
//     if(num<=10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(chooseNum(4));
// console.log(chooseNum(12));

//Print the second largest number in an array
let arr1 = [1,2,3,4,5,8,12];
  for(i=1;i<=2;i++){
     console.log(arr1.Math.max());
  }

