function checkEven(num){
    try{
        if(num%2==0){
           console.log("This is Even Number");
        }
        else{
            throw new Error("This is not Even Number");
            
        }
    }
    catch(error){
         console.error("Error Founded : ",error.message);
    }
    finally{
        if(num%2==0){
            console.log("Even Number founded");
        }
        else{
            console.log("Odd Number Founded");
        }
    }
}
checkEven(5);
checkEven(4);