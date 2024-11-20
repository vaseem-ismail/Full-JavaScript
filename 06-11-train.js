//Given a value n print the below pattern n = 3
function patPrint(n){
    for(i=1;i<=n;i++){
        let store = "";
        for(j=1;j<=n;j++){
            if(i%2==0){
                store += "# ";
            }
            else{
                store += "* ";
            }
        }
        console.log(store);
    }
}
patPrint(3);
patPrint(4);