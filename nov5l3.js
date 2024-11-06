// You have a number n, write a program which tells if it is a power of 3 or not.
function checkNum(n){
    let valArr = [];
    for(i=1;i<=100;i++){
        let store = 0;
        for(j=1;j<=i;j++){
            store += 3*i;    
        }
        valArr.push(store);
    }
    console.log(valArr);
    console.log(n);
}
checkNum(9);