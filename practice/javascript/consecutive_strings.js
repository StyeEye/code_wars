// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length)
        return '';

    let longestIndex = 0;

    for (let i = 0, longest = 0; i <= strarr.length - k; i++) {
        let currentLength = 0;
        for (let j = 0; j < k; j++) {
            currentLength += strarr[i + j].length;
        }

        if (currentLength > longest) {
            longest = currentLength;
            longestIndex = i;
        }
    }

    return strarr.slice(longestIndex, longestIndex + k).join('');
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // "abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))