// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1634 (4 digits):
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissistic(value) {
    const digits = String(value).length;
    let output = 0;

    for (let x = value; x >= 1; x = Math.floor(x / 10)) {
        output += Math.pow(x % 10, digits);
    }

    return output === value;
}

console.log(narcissistic(7)); // true
console.log(narcissistic(371)); // true