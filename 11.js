// Program to Calculate the Area of a Triangle

function calculateTriangleArea(base, height) {
    let area = 0.5 * base * height;
    return area;
}

// Example usage:
let base = 5;
let height = 10;
let area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);