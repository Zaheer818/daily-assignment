// Program to Find LCM
// Function to find the GCD of two numbers using Euclidean algorithm
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to find the LCM of two numbers
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

// Example usage:
let num1 = 12;
let num2 = 18;
let lcm = findLCM(num1, num2);
console.log("LCM of", num1, "and", num2, "is", lcm);