// https://www.codewars.com/kata/get-key-slash-value-pairs-as-arrays/train/javascript

function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 2, b: 6 }))