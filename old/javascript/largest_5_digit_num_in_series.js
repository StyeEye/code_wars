// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
    let biggest = -1;

    for (let i = 0; i <= digits.length - 5; ++i) {
        const currentString = digits.slice(i, i + 5);

        const currentNumber = parseInt(currentString);

        biggest = Math.max(biggest, currentNumber);
    }

    return biggest;
}