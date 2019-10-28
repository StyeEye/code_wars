// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    const letters = text.toLowerCase().split('').sort();

    const dupes = letters.reduce((r, e, i) => {
        const dupes = (e === r.last && e !== r.twoPast) ? r.count + 1 : r.count;
        return {
            last: e,
            twoPast: r.last,
            count: dupes
        }
    }, { last: null, twoPast: null, count: 0 });

    return dupes.count;
}

console.log(duplicateCount("Indivisibilities")); // 2