// Program to Find the Factors of a Number
// Function to find factors of a number
function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (number / i !== i) {
                factors.push(number / i);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}

// Example usage:
let number = 24;
let factors = findFactors(number);
console.log("Factors of", number, "are:", factors);