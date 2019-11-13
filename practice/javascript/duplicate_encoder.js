// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only
// once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if
// a character is a duplicate.

function duplicateEncode(word) {
    const lower = word.toLowerCase();

    console.log(lower)
    const dupes = lower
        .split('')
        .sort()
        .reduce((r, e, i, a) => {
            if (a[(i + 1) % a.length] === e && !r.includes(e))
                r.push(e);

            return r;
        }, []);

    return lower
        .split('')
        .map(e => dupes.includes(e) ? ')' : '(')
        .join('');
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success"))