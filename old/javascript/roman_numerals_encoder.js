// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
    let output = "";

    const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    for (let num = number, i = 0; num > 0; num = parseInt(num / 10), i += 2) {
        for (let j = 0; j < 2; ++j) {
            switch ((num - 5 * j) % 5) {
                case 1:
                    output += symbols[i + j];
                    break;
                case 2:
                    output += symbols[i + j] + symbols[i + j];
                    break;
                case 3:
                    output += symbols[i + j] + symbols[i + j] + symbols[i + j];
                    break;
                case 4:
                    output += symbols[i + j] + symbols[i + j + 1];
                    break;
                default:
                    output += symbols[i];
                    break;
            }
        }
    }

    return output;
}

console.log(solution(5));