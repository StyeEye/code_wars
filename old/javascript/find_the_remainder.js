// https://www.codewars.com/kata/524f5125ad9c12894e00003f

// Write a function that accepts two arguments and returns the
// remainder after dividing the larger number by the smaller number.
// Division by zero should return NaN
// (in C#, throw a new DivideByZeroException instead).
// Arguments will both be integers.

function remainder(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    return min !== 0 ? max % min : NaN;
}