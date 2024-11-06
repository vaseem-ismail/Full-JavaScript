function num(n){
   
    for(i=1;i<=Math.floor(n*2-1);i++){
        let store = "";
        for(j=1;j<=i;j++){
            store += j+" ";
        }
        for(k=i-1;k>=1;k--){
            store += k+" ";
        }
       console.log(store);
    }
}
num(3);

// function factorial(num){
//     let m = 1;
//     let total = 0;
//     for(i=1;i<=num;i++){
//         m*= i;
//         total += m;
//     }
//     console.log(total);
// }
// factorial(5);