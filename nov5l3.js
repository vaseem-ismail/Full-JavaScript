// You have a number n, write a program which tells if it is a power of 3 or not.
function checkNum(n) {
    let pow = 3;
    for (i = 1; i <= n; i++) {
        pow *= 3;
        if (pow == n) {
            console.log("Yes");
            break;
        }
        else if (pow > n) {
            console.log("No");
            break;
        }
    }
}
checkNum(81);