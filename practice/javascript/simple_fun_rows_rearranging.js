// https://www.codewars.com/kata/58958ef541c9794213000090/train/javascript

// Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).
// Note, that you should not rearrange the elements of rows.

function rowsRearranging(matrix) {
    const sorted = matrix.sort((rowA, rowB) => {
        const scoreFunc = arr => arr.reduce((r, e, i, a) => r + (a.length - i) * e, 0);

        return scoreFunc(rowA) - scoreFunc(rowB);
    });

    let lastRow = matrix[0]
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] <= lastRow[j])
                return false;
        }
        lastRow = matrix[i];
    }

    return true;
}

var matrix = [
    [2, 7, 1],
    [0, 2, 0],
    [1, 3, 1]]
console.log(rowsRearranging(matrix)); // false

matrix = [
    [6, 4],
    [2, 2],
    [4, 3]]
console.log(rowsRearranging(matrix)); // true