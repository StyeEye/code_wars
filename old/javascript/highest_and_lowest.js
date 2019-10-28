/// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
    const numberArr = numbers
        .split(" ")
        .map(e => Number(e))
        .sort((a, b) => a - b);

    return `${numberArr[numberArr.length - 1]} ${numberArr[0]}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));