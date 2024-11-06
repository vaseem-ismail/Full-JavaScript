// //Given a number find the LCM of a number
// function LCM(a,b){
//     let maxNum = Math.max(a,b);
//     let minNum = Math.min(a,b);
//     let BigNum = maxNum;

//     while(BigNum%minNum!==0){
//         BigNum+=maxNum;
//     }
//     return BigNum;
// }
// console.log(LCM(30,18));

//Write code to implement the fibonacci sequence.

// function findFib(num){
//      let fibon = [0,1];
//      for(i=3;i<=num;i++){
//         let store = 0;
//         for(j=-2;j>=-3;j--){
//             store += fibon[i+j];
//         }
//         fibon.push(store);
//      }
//      console.log(fibon);

//      //Find Even
//      let evenArr = [];
//      for(i=0;i<=fibon.length-1;i++){
//         if(fibon[i]%2==0 && fibon[i]!=0){
//             evenArr.push(fibon[i]);
//         }
//      }
//      console.log(evenArr);

// }
// findFib(8);

// function findFib(num){
//     let fibon = [0,1];
//     for(i=3;i<=num;i++){
//        let store = 0;
//        for(j=-2;j>=-3;j--){
//            store += fibon[i+j];
//        }
//        fibon.push(store);
//     }
//     console.log(fibon);

//     //Find Odd
//     let oddArr = [];
//     for(i=0;i<=fibon.length-1;i++){
//        if(fibon[i]%2!==0 && fibon[i]!=0){
//            oddArr.push(fibon[i]);
//        }
//     }
//     console.log(oddArr);

// }
// findFib(15);

// Print the following pattern if n = 4
function printNum(num) {
    for (i = 1; i <= num; i++) {
        let store = ""
        for (j = 1; j <= i; j++) {
            if (i % 2 == 0) {
                store += "* ";
            }
            else {
                store += i + " ";
            }
        }
        console.log(store.trim().padStart(num + i - 1));
    }
}
printNum(4)





