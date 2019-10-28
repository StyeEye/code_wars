// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length)
        return false;

    const arr1Squared = array1.map(e => e *= e).sort((x, y) => x - y);
    const arr2Sorted = array2.sort((x, y) => x - y);

    return arr2Sorted.reduce((v, e, i) => {
        if (!v)
            return false;
        return arr1Squared[i] === arr2Sorted[i];
    }, true);
}