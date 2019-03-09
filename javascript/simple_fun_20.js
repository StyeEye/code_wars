// https://www.codewars.com/kata/simple-fun-number-20-first-reverse-try/train/javascript

function firstReverseTry(arr) {
    if (arr.length <= 1)
        return arr;

    const first = arr.shift();
    const last = arr.pop();

    arr.push(first);
    arr.unshift(last);
    return arr;
}