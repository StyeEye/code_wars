// https://www.codewars.com/kata/536ce83e2f403659a5000d47/train/javascript

// Create an addition function that does not utilize the + or - operators.

// Learned technique from this page:
//    https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
function add(x, y) {
    while (y !== 0) {
        let carry = y & x;
        x ^= y;
        y = carry << 1;
    }

    return x;
}

console.log(add(5, 10));