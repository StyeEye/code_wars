// https://www.codewars.com/kata/5a3357ae8058425bde002674

// In this kata, your task is to implement what I call Iterative Rotation Cipher (IRC). To complete the task, you will create an object with two methods, encode and decode. (For non-JavaScript versions, you only need to write the two functions without the enclosing dict)
// Input

// The encode method will receive two arguments — a positive integer n and a string value.

// The decode method will receive one argument — a string value.
// Output

// Each method will return a string value.
// How It Works

// Encoding and decoding are done by performing a series of character and substring rotations on a string input.

// Encoding: The number of rotations is determined by the value of n. The sequence of rotations is applied in the following order:
//  Step 1: remove all spaces in the string (but remember their positions)
//  Step 2: shift the order of characters in the new string to the right by n characters
//  Step 3: put the spaces back in their original positions
//  Step 4: shift the characters of each substring (separated by one or more consecutive spaces) to the right by n

// Repeat this process until it has been completed n times in total.
// The value n is then prepended to the resulting string with a space.


const IterativeRotationCipher = {};

const shiftString = (input, amount) => {
    const chars = (input.match(/[^ ]/g) || []);

    let pos = chars.length;
    return input.replace(/[^ ]/g, () => {
        return chars[(pos++ - (amount % chars.length)) % chars.length];
    });
}

IterativeRotationCipher.encode = function (n, str) {
    let outStr = str;
    for (let i = 0; i < n; i++) {
        const shifted = shiftString(outStr, n);
        outStr = shifted
            .split(' ')
            .map(e => {
                return shiftString(e, n)
            })
            .join(' ');
    }

    return `${n} ${outStr}`;
};

IterativeRotationCipher.decode = function (str) {
    const words = str.split(' ');
    const shift = parseInt(words[0]);

    let outStr = words.slice(1).join(' ');
    for (let i = 0; i < shift; i++) {
        outStr = shiftString(
            outStr
                .split(' ')
                .map(e => shiftString(e, -shift))
                .join(' '),
            -shift
        );
    }

    return outStr;
};

console.log(IterativeRotationCipher.encode(10, `If you wish to make an apple pie from scratch, you must first invent the universe.`));
console.log(IterativeRotationCipher.decode(IterativeRotationCipher.encode(10, `If you wish to make an apple pie from scratch, you must first invent the universe.`)));

console.log(IterativeRotationCipher.encode(36, `As I was going up the stair
I met a man who wasn't there!
He wasn't there again today,
Oh how I wish he'd go away!`));
