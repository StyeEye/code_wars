// Write a JavaScript function to merge two arrays and removes all duplicates elements.

function merge_array(array1, array2) {
    const noDupes = new Set([array1, array2])

    return Array.from(noDupes);
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]


// Write a JavaScript function to get a random item from an array

function getRandom(array) {
    const index = Math.floor(Math.random(array.length));

    return array[index];
}


// Write a JavaScript function to move an array element from one position to another.

function move(array, index1, index2) {
    index2 = index2 >= 0 ? index2 : array.length + index2

    const [value1] = array.splice(index1, 1);

    array.splice(index2, 0, value1);

    return array;
}

// Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]