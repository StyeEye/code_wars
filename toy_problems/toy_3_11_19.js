// Problem - Recreate array.filter(), more or less

// Dataset
const data = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90];
// Expected output - [10,20,30,40,50,60,70,80,90]

// Expects array, and a function that will return true/false given any element as a value
function filter(array, filterFunc) {
    const output = [];

    array.forEach(element => {
        if(filterFunc(element))
            output.push(element);
    });

    return output;
}

function gte10(x) {
    return x >= 10 ? true : false;
}

console.log(data);
console.log(filter(data, gte10));

