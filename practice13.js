let userIn = require('node:readline');
let str1 = userIn.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let str2 = "";
str1.question("Guess the Number:" ,input => {
    str2 == input;
    console.log()
}
)