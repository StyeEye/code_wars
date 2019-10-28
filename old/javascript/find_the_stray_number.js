// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    const [one, two, three] = numbers;
    if (one !== two) {
        return (one === three) ? two : one;
    }

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] != numbers[i - 1])
            return numbers[i];
    }
}

console.log(stray([1, 1, 2]))