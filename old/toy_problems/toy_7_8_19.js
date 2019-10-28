// Write a JavaScript function to generate an array between two integers of 1 step length.

function rangeBetween(a, b) {
    const length = a - b + 1;

    return Array.from({ length }, (e, i) => a + i);
}

// Test Data :
console.log(rangeBetween(4, 7));
// [4, 5, 6, 7]
console.log(rangeBetween(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]