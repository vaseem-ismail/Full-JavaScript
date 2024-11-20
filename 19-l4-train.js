// function printStar(n) {
//     for(let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);

//     }

//     // // Reverse print
//     // for(let i = n - 1; i >=1; i--) {
//     //     let output = getSpaces(n - i);
//     //     let pattern = getNumSequence(i);
//     //     console.log(output + pattern);
//     // }

// }

// function getSpaces(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     console.log(outputStr);
//     return outputStr;
// }


// function getNumSequence(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += i + " ";
//     }
//     return outputStr;
// }
// printStar(10);

function parseingInt(num){
    let value = parseInt(num,10);
    console.log(value);
    console.log(num);
}
parseingInt("hi I am Mohamed in FSSA");