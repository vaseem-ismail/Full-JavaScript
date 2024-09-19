// //
// let array = ["one","two","three"];
// let store = 0;
// let empty = [];
//     for(i=array.length-1;0<=i;i--){
//         store = array[i];
//         let total = empty.push(store);
//         console.log(total);
//     }
//     console.log(empty);


// //Create an array of 5 fruits and print the number of elements using the length property.
// let fruit = ["apple","orange","mango","guava","lemon"];
// console.log(fruit.length)


// //Create an array of 4 colors. Find the index of "Green" using indexOf() and print it. Also, try finding an element that does not exist and print the result.
// let colour = ["green","blue","yellow","black"];
// console.log(colour.indexOf("green"));


// //Write a program that creates an array of 3 animals. Use push() to add another animal to the array and print the new array.
// let animal = ["dog","cat","cow","deer","bull"];
// let last = animal.push("lion");
// console.log(last);
// console.log(animal);


// //Create an array of 4 car brands. Remove the last element using pop() and print the removed element as well as the updated array.
// let cars = ["Bugatti","koenigsegg","Toyota","Chevy","Tata"];
// let popOf = cars.pop();
// console.log(popOf);
// console.log(cars);


// //Write a program to create an array of 3 gadgets. Remove the first element using shift() and print the resulting array.
// let gadgets = ["TV","Laptop","Phone"];
// console.log(gadgets.shift());
// console.log(gadgets);


// //Create an array of 2 cities. Add two more cities to the beginning using unshift() and print the new array.
// let cities = ["London","Moscow"];
// console.log(cities.unshift("Washington"));
// console.log(cities);


// //Create an array of 3 programming languages. Use join() to create a string where each language is separated by a comma, and print the result.
// let programming = ["JavaScript","Python","C++"];
// let total = programming.join(" , ");
// console.log(total);




// // Write a program to split the string "dog,cat,bird" into an array and print the resulting array.
// let str = "Mohamed,Vaseem";
// let tot = str.split(",");
// console.log(tot);



//
let number = 1350;
let str = [];
let str2 = str.push(number);
let str3= number.split(",");
let sum=0;
 for(i=0;i<=number.length-1;i++){
    sum += number[i];
   }
console.log(sum); 
console.log(str);

