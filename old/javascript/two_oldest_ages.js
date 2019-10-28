// https://www.codewars.com/kata/two-oldest-ages-1/train/javascript

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b)
        .slice(ages.length - 2, ages.length);
}

console.log(twoOldestAges([5, 7, 12, 10, 3]))