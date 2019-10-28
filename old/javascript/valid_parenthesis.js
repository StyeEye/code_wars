// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
    return !Array.from(parens)
        .reduce((count, e) => {
        if (count === -1)
            return -1;
        else if (e === '(')
            return count + 1;
        else if (e === ')')
            return count - 1;
        else
            return -1;
    }, 0);
}

console.log(validParentheses( "()" ));