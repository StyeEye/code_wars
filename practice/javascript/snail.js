// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

snail = function (array) {
    const out = [];
    while (array.length) {
        out.push(...array.shift());
        for (const elem of array)
            out.push(elem.pop());

        if (array.length) {
            out.push(...array.pop().reverse());
            for (let i = array.length - 1; i >= 0; i--)
                out.push(array[i].shift());
        }
    }

    return out;
}

// [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));