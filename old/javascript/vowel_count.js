// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const count = str.match(/[aeiou]/gi);
    return count ? count.length : 0;
}

console.log(getCount("abracadabra"));
console.log(getCount("hyt"));