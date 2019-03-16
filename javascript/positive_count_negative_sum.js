https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length)
        return [];

    return input.reduce((v, e) => {
        if (e > 0)
            v[0] += 1;
        else
            v[1] += e;
        return v;
    }, [0, 0]);
}