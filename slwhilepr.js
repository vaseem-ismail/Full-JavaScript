function isPalindromeForLoop(str) {
    // Clean the string (lowercase and remove non-alphanumeric characters)
    let cleanedStr = str.toLowerCase();
    let length = cleanedStr.length;
    
    // Use a for loop to compare characters from the start and end
    for (let i = 0; i ; i++) {
        if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
            return false;  // Not a palindrome if characters don't match
        }
        return true;
    }
    // It's a palindrome if all characters match
}

// Test the function
let input = "input";
if (isPalindromeForLoop(input)) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}

