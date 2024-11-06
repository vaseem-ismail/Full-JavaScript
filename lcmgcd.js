// Function to calculate the GCD of two numbers
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}
console.log(gcd(8,16));