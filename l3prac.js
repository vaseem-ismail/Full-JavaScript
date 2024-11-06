// function findArr(a){
//     let aone = a[0];
//     let atwo = a[1];
//     let athree = a[2];
//     let afour = a[3];
//     function LCM(aone,atwo){
//         let bigNum = Math.max(aone,atwo);
//         let smallNum = Math.min(aone,atwo);
//         let Large = bigNum;
//         while(Large%smallNum == 0){
//             Large += bigNum;
//         }
//         return Large;
//     }
//     function GCD(athree,afour){

//         while(afour!=0){
//             let temp = afour;
//             afour = athree%afour;
//             temp = athree;
//         }
//         return athree;
//     }

//     let lcmResult = LCM(aone, atwo);
//     let gcdResult = GCD(athree, afour);

//     return [lcmResult, gcdResult];
// }
// console.log(findArr([48,18,24,6]));

// //LCM numbers between m&n
// function primeNum(m,n){
//     let prime = [];
//     let nPrime = [];
//     for(i=m;i<=n;i++){
//         for(j=2;j<=Math.sqrt(i);j++){
//             if(i%j==0){
//                 nPrime += i,",";
//             }
//         }
//         prime += i+", ";
//     }

//     console.log(prime);
// }
// primeNum(10,15)

// function prime(m, n) {
//     let sum = 0;

//     for (i = m; i <= n; i++) {
//         let count = 0;
//         for (j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j == 0) {
//                 count++;
//             }
//         }
//         if (count == 0) {
//             sum += i;
//             // console.log(i);

//         }
//     }
//     //    console.log(sum);

// }
// prime(10, 15);
function sprime(m, n) {
    let Prime = [];
    for (i = m; i <= n; i++) {
        let count = 0;
        for (j = 2; Math.sqrt(i); j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if(count==0){
            Prime = Prime.push(i);
        }
    }
    console.log(Prime);
    
}
sprime(15,20);



