// Function to calculate the sum of natural numbers up to a given number
function sumOfNaturalNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// Get input from the user
let userInput = prompt("Enter a positive integer:");

// Convert user input to a number
let number = parseInt(userInput);

// Check if the input is a positive integer
if (isNaN(number) || number <= 0) {
    console.log("Invalid input. Please enter a positive integer.");
} else {
    // Calculate the sum of natural numbers up to the given number
    let sum = sumOfNaturalNumbers(number);
    console.log("The sum of natural numbers up to " + number + " is: " + sum);
}