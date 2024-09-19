//1
let num=[1,2,3,4,5]
console.log(num);

//2 
let string=["Manager","Devops","Employee","Hackers"];
console.log(string[1]);
console.log(string[3]);

//3
let str2=["string1","string2","string3"];
str2[1]="string4";
console.log(str2);

//4
let array=["one","two","three","four","five","six","seven"];
console.log(array.length);

//5
let str3=["array1","array2","array3","array4","array5","array6","array7"];
   for(let i=0;i<=str3.length-1;i++){
    console.log(str3[i]);
   }

//6
let num2=[1,2,3,4,5,6];
let store=0;
     for(let i=0;i<=num2.length-1;i++){
        store+=num2[i];
     }
     console.log(store);


//7
let arrays=["content1","content2","content3","content4"];
  for(let array of arrays){
    console.log(array);
  }


//8
let arrays1=[1,2,3,4,5,6];
arrays1.forEach(arrays2=> console.log(arrays2));


//9
let arrays3=[1,2,3,4,5,6];
   for(let i=0;i<=arrays3.length-1;i++){
    if(arrays3[i]%2==1){
       console.log(arrays3[i],"is Odd Number");
    }
   }

   
//11
let arrays4=["one","two","three","four","five","six"]
let reverseAr=arrays4.reverse();
console.log(reverseAr);
