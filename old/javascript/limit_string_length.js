// https://www.codewars.com/kata/5208fc3cb613bc725f000142

function solution(string, limit) {
    return limit >= string.length ? string : `${string.slice(0, limit)}...`;
}

console.log(solution('Testing String', 3))
console.log(solution('Testing String', 8))
console.log(solution('Test', 8))