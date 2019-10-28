// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    const counts = A.reduce((tracker, e) => {
        tracker[e] = tracker[e] ? tracker[e] + 1 : 1;
        //console.log(tracker[e])

        return tracker;
    }, {});

    for (key in counts) {
        if (counts[key] % 2)
            return parseInt(key);
    }

    return null;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));