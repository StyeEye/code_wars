// https://www.codewars.com/kata/fizz-buzz/train/javascript

// Return an array
function fizzbuzz(n) {
    const output = [];

    for (let i = 1; i <= n; ++i) {
        const multipleOf3 = !(i % 3);
        const multipleOf5 = !(i % 5);

        if (multipleOf3) {
            if (multipleOf5)
                output.push("FizzBuzz");
            else
                output.push("Fizz");
        } else if (multipleOf5)
            output.push("Buzz");
        else
            output.push(i);
    }

    return output;
}
