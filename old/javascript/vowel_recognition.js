// https://www.codewars.com/kata/5bed96b9a68c19d394000b1d

function vowelRecognition(input) {
    const length = input.length;

    return Array.from(input).reduce((v, e, i) => {
        if (e.toLowerCase().match(/[aeiou]/)) {
            return v + (i + 1) * (length - i);
        } else
            return v;
    }, 0);
}

console.log(vowelRecognition("baceb"))
//x x-1 x-2 x-3 x-4
//  x-1 x-2 x-3 x-4
//      x-2 x-3 x-4
//          x-3 x-4
//              x-4

//x 2(x-1) 3(x-2) 4(x-3) 5(x-4)