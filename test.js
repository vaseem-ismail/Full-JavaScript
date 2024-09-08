let teamScore=150;
let targetScore=145;
let oversLeft=0;
function dlMethod(teamScore, targetScore, oversLeft)
{
if(teamScore>targetScore)
{
    console.log("Team wins by DL method");
}
else if( teamScore<targetScore && oversLeft>0)
{
    console.log("Match to be continued");
}
else
{
    console.log("Team loses by DL method");
}
}