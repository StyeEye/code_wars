// https://www.codewars.com/kata/shift-left-1/train/javascript

function shiftLeft(s, t) {
    let matchLength = 0;

    for (let i = s.length - 1, j = t.length - 1;
        i >= 0 && j >= 0; i-- , j--) {
        if (s[i] === t[j])
            matchLength = s.length - i;
        else
            break;
    }

    return s.length + t.length - 2 * matchLength;
}

console.log(shiftLeft("test", "yes"))