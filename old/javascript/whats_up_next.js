// https://www.codewars.com/kata/542ebbdb494db239f8000046

'use strict';

function nextItem(xs, item) {
    for (var val of xs)
        console.log(val);
}

function* countFrom(n) { for (let i = n; ; ++i) yield i; }
console.log(nextItem(countFrom(1), 12))