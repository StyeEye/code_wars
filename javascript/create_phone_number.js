// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
    const numStr = numbers.join('');
    return `(${numStr.slice(0, 3)}) ${numStr.slice(3, 6)}-${numStr.slice(6)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890