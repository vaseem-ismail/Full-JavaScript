//1
function sumNumbers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
      sum += i;
      i++;
    }
    console.log(sum);
  }
sumNumbers(10);


//2
function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}       
calculateGrade(40);
calculateGrade(60);
calculateGrade(70);
calculateGrade(80);
calculateGrade(90);


//3

let a = 5;
let b = 10;
let c = 3;

if( a > b && a > c) {
    console.log(a);
}

else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}


//4
function generateSeries(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        let term = i * i; 
        str = term + " ";
    }
    return str;
}
let n = 5;
let result = generateSeries(n);
console.log(`The first ${n} terms of the series are: ${result}`);


//5
function isMultipleOfSeven(N) {
    if (N%7 == 0) { 
        console.log("YES");
    } else {
        console.log("NO");
    }
}
isMultipleOfSeven(14);