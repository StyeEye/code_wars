// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string value passed into it. 

function solution(str) {
    return Array.from(str).reverse().join('');
}

console.log(solution('world')); // 'dlrow'