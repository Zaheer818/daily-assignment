// Program to Display the Multiplication Table
function displayMultiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage:
let number = 5;
displayMultiplicationTable(number);