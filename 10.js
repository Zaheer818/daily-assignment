// Program to Check Prime Number
function isPrime(number) {
    if (number <= 1) {
        return false; // numbers less than or equal to 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // if number is divisible by any number other than 1 and itself, it is not prime
        }
    }

    return true; // if no divisors are found, the number is prime
}

// Example usage:
let number = 29;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

number = 18;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}