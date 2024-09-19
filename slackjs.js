//1
function sumNumbers(n) {
    let o = 0;
    let p = 1;
    while (p <= n) {
        o = o + p;
        p++;
    }
    return o;
}
console.log(sumNumbers(10));

//2
function calculateFactorial(n) {
    let result = 1;
    let current = n;
    while (current > 1) {
        result *= current;
        current--;
    }
    return result;
}
console.log(calculateFactorial(10));

//3
function printEvenNumbers(num){
     let current = 1;
     while(current<=num){
        if(current%2==0){
            console.log("Even");
        }
        else{
            console.log("Not Even");
        }
        current++;
    }
}
printEvenNumbers(10);

//4
function sumNumbers(n) {
    let sum = 0;
    let num = 1;
    while (num <= n) {
      sum += num;
      num++;
    }
    return sum;
  }
  console.log(sumNumbers(5));