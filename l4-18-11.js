
// function circularShiftRight(arr) {
//     if (arr.length == 0) {
//         console.log("Array is Empty");
//         return;
//     }
//     else {
//         let lastEle = arr[arr.length - 1];
//         popArr = arr.pop();
//         let store = "";
//         store += lastEle + " ";
//         for (i = 0; i <= arr.length - 1; i++) {
//             store += arr[i] + " ";
//         }
//         console.log(store);
//     }
// }
// circularShiftRight([1, 2, 3, 4]);
// circularShiftRight([]);
// circularShiftRight(["M","D","V","I"]);

// function calculateTotalBill(usages) {
//     let finArr = 0;
//       for(i=0;i<=usages.length-1;i++){
//           let usage = 0;
//           if(usages[i]<=100){
//             usage += usages[i]*8;
//           }
//           else if(usages[i]<=200){
//             usage += usages[i]*12;
//           }
//           else{
//             usage += 100*8 + 200*12 + (usages[i]-200)*15;
//           }
//         finArr+=usage; 
//       }
//       console.log(finArr);
     
//   }
//   calculateTotalBill([350, 150, 100]);

// function calculateTotalBill(usages) {
//     let finArr = 0;
//     for (let i = 0; i < usages.length; i++) {
//         let usage = 0;

//         if (usages[i] <= 100) {
//             // First 100 units
//             usage += usages[i] * 8;
//         } else if (usages[i] <= 200) {
//             // First 100 units + Next 100 units
//             usage += 100 * 8 + (usages[i] - 100) * 12;
//         } else {
//             // First 100 units + Next 100 units + Remaining units
//             usage += 100 * 8 + 100 * 12 + (usages[i] - 200) * 15;
//         }

//         finArr += usage;
//     }
//     console.log(finArr);
// }

// // Example usage:
// calculateTotalBill([350, 150, 100]); // Output: [4700, 1800, 800]

function strLenEven(str){
    let words = str.split(" ");
    for(i=0;i<=words.length-1;i++){
        console.log(words[i])
    }
}
strLenEven("Hi I am Mohamed");