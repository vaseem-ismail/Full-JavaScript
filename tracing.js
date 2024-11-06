let n =5;

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n; j++) {
//         if (i == 1 || i == n || j == 1 || j == n) {
//             row += i + ' ';
//         } else {
//             row += '  ';  
//         }
//     }
//     console.log(row);
// }

// //Model Loop
// function timesPrint(num){
//     for(i=0;i<=num;i++){
//         let num = "";
//         for(j=0;j<=num;j++){
//             if(j==3 || i==2&&j==2 || i==3&&j==2 || i==4&&j==2 || i==5 ||i==2&&j==4){
//                num+="* ";
//             }
//             else{
//                 num+="  ";
//             }
//         }
//         console.log(num);
//     }
// }
// timesPrint(5);


function printNum(num){
    let Num = [];
    let Num1 = [];
    for(i=0;i<=num*2;i++){
        if(i%2!=0){
            Num+= i + ", ";
        }
    }
    for(j=Num.length-1;j>=0;j--){
        Num1+=Num[i];
    }
    console.log(Num1);
}
printNum(5);