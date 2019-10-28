// Take in an array of numbers and use Array.prototype.reduce to return the sum of all elements

function test(arr) {
    return arr.reduce((sum, e) => sum + e, 0);
}

// Write a function that Take in an array of numbers. Use Array.prototype.filter to return a new array with only the numbers that are greater than 10

function test(arr) {
    return arr.filter(e => e > 10);
}

// Write a function that takes in an array and a number(index). Use Array.prototype.splice to remove the element at the index (number passed in) and replace it with the string ‘replaced’ 

function test(arr, index) {
    arr.splice(index, 1, "replaced");
    return arr;
}

// Write a function that takes in the array and a string. Use Array.prototype.includes to return true if the array includes the string and false if it does not

function test(arr, str) {
    return arr.includes(str);
}

// Write a function that takes in an array and uses Array.prototype.map to return a new array with all strings capitalized

function test(arr) {
    return arr.map(e => e.toUpperCase());
}

// Write a function that takes in an array of numbers and uses Array.prototype.sort to return the array sorted from largest to smallest

function test(arr) {
    return arr.sort((a, b) => b - a);
}


