let a =20;
let b= 30;
// console.log("Before swap: a =", a, ", b =", b);

function swapUsingTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, ", b =", b);
}
