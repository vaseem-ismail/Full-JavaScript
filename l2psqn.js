//1
let f = 12;
let store = 0;
    for(i = 1;i<=f;i++){
        if(i%2==0){
             store += i;
        }
    }
    console.log(store);


//2
function nMultiple(n){
    for(i=1;i<=n;i++){
        console.log(i*3);
    }
}
nMultiple(5);


//3
function allScores(teamScores,targetScores,overLeft){
    if(teamScores>=targetScores){
        console.log("Team win by DL method");
    }
    else if(teamScores<targetScores && overLeft>0){
        console.log("Match to be continued");
    }
    else{
        console.log("Team loses by DL method");
    }
}
allScores(100,200,10);