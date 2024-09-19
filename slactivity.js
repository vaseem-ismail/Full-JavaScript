// Greek User Name
function greekUser(firstName,lastName){
    let greekfn = firstName +" " +lastName;   
    console.log("Hello",`${greekfn}`);
}
greekUser("Mohamed","Vaseem");


//Subject verb Object
function subVerbObj(sub,verb,obj){
    let sentance = sub +" " +verb +" " +obj;
    console.log(`${sentance}`);
}
subVerbObj("My Friend","is brokened","my pen")


//User and Hobby
function userHobby(user,hobby){
    console.log("Hello",`${user}`,",","Your favorite hobby is",`${hobby}`,".");
}
userHobby("Mohamed","gaming");


//String concatenate
function stConcatenate(str1,str2){
    let string = str1 +" " +str2;
    console.log(`${string}`);
}
stConcatenate("Javascript is fun","and very useful");


//introduction about someone
function intro(name,age){
    console.log("Hi my name is",`${name}`,"and I am",`${age}`,"years old");
}
intro("Mohamed","18");


//Creating URL using given variables
function createUrl(protocol,domain,path){
    let link = protocol +".//" +domain +path;
    console.log(`${link}`);
}
createUrl("https","www.example.com","/about");


//Product and Price
function productSell(product,price){
    let sellprod = "This " +product +" " +"costs " +price;
    console.log(`${sellprod}`);
}
productSell("laptop","$800");
productSell("Mobile","$200");


//favorite movie description
function favoriteMovie(movie,year){
    console.log("Your favorite movie is " +`${movie}` +"which is released in " +`${year}`);
}
favoriteMovie("I","2015");


//Time and place
function placeAndTime(place,time){
    let meeting = "The meeting is at " +time +" in " +place;
    console.log(`${meeting}`);
}
placeAndTime("Fssa","3 o'clock");


//Number addition
function numAdd(num1,num2){
    let numTot = num1 + num2;
    console.log(num1 +" plus " +num2 +" equals " +numTot);
}
numAdd(10,20);