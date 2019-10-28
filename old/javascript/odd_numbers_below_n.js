// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(number) {
    return Math.floor(number / 2);
}

console.log(oddCount(7)); //=> 3, i.e [1, 3, 5]
console.log(oddCount(15)); //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]