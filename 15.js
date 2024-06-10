// Program to Check if the Numbers Have Same Last Digit
// Function to check if two numbers have the same last digit
function haveSameLastDigit(num1, num2) {
    // Get the last digit of each number
    let lastDigit1 = Math.abs(num1) % 10;
    let lastDigit2 = Math.abs(num2) % 10;

    // Check if the last digits are equal
    return lastDigit1 === lastDigit2;
}

// Example usage:
let number1 = 123;
let number2 = 543;
if (haveSameLastDigit(number1, number2)) {
    console.log("The last digits of " + number1 + " and " + number2 + " are the same.");
} else {
    console.log("The last digits of " + number1 + " and " + number2 + " are different.");
}