//slack javascript practice


//1
function greet(something){
    console.log(something);
}
 greet("Hello World!");

//2
 function getRandomNumber() {
   return Math.random();
 }
 let num=getRandomNumber();
 console.log(num);

//3
function displayGreeting(randomName) {
    console.log(`Hello ,${randomName}!`)
}
displayGreeting("Mohamed  vaseem  ismail");

//4
function calculateSquare(num){
  return num*num;
}
console.log(calculateSquare(3));

//5
function concatStrings(string1,string2){
console.log(string1+string2);}
concatStrings("Mohamed","Vaseem");

//6
function isAdult(a){
  if(a>=18){
    return true;
  }
  else{
    return false;
  }
}
console.log(isAdult(18));

//7
function addNumbers(a,b){
let add=a+b;
 return add;
}
console.log(addNumbers(100,200));
console.log(addNumbers(300,200));

//8
function isEven(givenNum){
  if(givenNum%2==0){
   return true;
  }
  else{
   return false;
  }
}
console.log(isEven(13));
console.log(isEven(50));

//9
function compareNumbers(num1,num2){
  if (num1==num2){
    return "The Number are Equal";
  }
  else if(num1>num2){
    return "The First Number is Greater";
  }
  else{
    return "The Second Number is Greater";
  }
}
console.log(compareNumbers(10,11));
console.log(compareNumbers(120,119));
console.log(compareNumbers(100,100));