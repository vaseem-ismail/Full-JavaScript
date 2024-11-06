function isPrime(num){
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "Not Prime";
        }
    }    return "Prime";
}
console.log(isPrime(149));

//LCM
function LCM(a,b){
    let Larger = Math.max(a,b);
    let Smaller = Math.min(a,b);
    let Big = Larger;

    while(Big%Smaller !== 0){
        Big += Larger;
    }
    return Big;
}
console.log(LCM(18,12));

//GCD
function GCD(a,b){
    while(b!==0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(GCD(48,18));


//
let Num = 1;
console.log(Num);