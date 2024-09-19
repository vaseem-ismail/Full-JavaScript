//Print of N multiple of 5
let N = 3;
let sum = 0;
let output = "";
for (let i = 1; i <= N; i++) {
    let multiple = i * 5;
    sum += multiple;
    output += multiple;
    if (i < N) {
        output += " + ";  
    }
}
output += " = " + sum;
console.log(output);


//Print the n into n times
function nTimes(n){
    for(i=n;n>=i;n++){
        console.log(n);
    }
}
nTimes(3);