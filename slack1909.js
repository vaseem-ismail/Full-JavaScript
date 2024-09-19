// //You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.
// let dailyExpenses=[10,20,40,5];
// let totExp = 0;
//   for(let i=0;i<=dailyExpenses.length-1;i++){
//      totExp += dailyExpenses[i];
//   }
//   console.log(totExp);

// //You are given an array of student grades. Write a function that calculates the average grade.
// function averageGrade(grade){
//     let sum = 0;
//     for(let i=0;i<=grade.length-1;i++){
//        sum += grade[i];
//     }
//     let average = sum/grade.length;
//     console.log("The  Average Grade of Student is",average);
// }
// let grade = [100,70,35,56,54];
// averageGrade(grade);

// //You have an array of people ages. Write a function that filters out people who are 18 years old or older.
// let ages = [18,17,19,20];
//    for(let i=0;i<=ages.length-1;i++){
//     if(ages[i]>=18){
//         console.log(ages[i]);
//     }
//    }

//You have an array of integers. Write a function that returns the count of the even numbers in the array.
function numbers(integers){
let count = 0;
   for(let i=0;i<=integers.length-1;i++){
        if(integers[i]%2==0){
            count+=1;
        }
   }
   return(count);
}
let integers = [1,2,3,4,5,6,7,8];
console.log(numbers(integers));
