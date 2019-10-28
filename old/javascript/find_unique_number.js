// https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

function findUniq(arr) {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        for (let i = arr.length - 1; i >= 0; --i) {
            if (arr[i] !== arr[0])
                return arr[i];
        }
    } else if (arr[0] === arr[1])
        return arr[2]
    else if (arr[0] === arr[2])
        return arr[1]
    else
        return arr[0]
}