// https://www.codewars.com/kata/calculating-with-functions/train/javascript

function zero(callback) {
    return (callback !== undefined) ?
        callback(0) : 0;
}
function one(callback) {
    return (callback !== undefined) ?
        callback(1) : 1;
}
function two(callback) {
    return (callback !== undefined) ?
        callback(2) : 2;
}
function three(callback) {
    return (callback !== undefined) ?
        callback(3) : 3;
}
function four(callback) {
    return (callback !== undefined) ?
        callback(4) : 4;
}
function five(callback) {
    return (callback !== undefined) ?
        callback(5) : 5;
}
function six(callback) {
    return (callback !== undefined) ?
        callback(6) : 6;
}
function seven(callback) {
    return (callback !== undefined) ?
        callback(7) : 7;
}
function eight(callback) {
    return (callback !== undefined) ?
        callback(8) : 8;
}
function nine(callback) {
    return (callback !== undefined) ?
        callback(9) : 9;
}

function plus(right) {
    return left => left + right;
}
function minus(right) {
    return left => left - right;
}
function times(right) {
    return left => left * right;
}
function dividedBy(right) {
    return left => parseInt(left / right);
}