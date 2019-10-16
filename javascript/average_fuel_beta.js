// https://www.codewars.com/kata/5d96030e4a3366001d24b3b7/train/javascript

// Story

// You just returned from a car trip, and you are curious about your fuel consumption during the trip. Unfortunately, you didn't reset the counter before you started, but you have written down the average consumption of the car and the previous distance travelled at that time. Looking at the dashboard, you note the current data...
// Task

// Complete the function that receives two pairs of input (before, after), and return the calculated average fuel consumption of your car during your trip, rounded to 1 decimal.

// Both pairs consist of 2 valid numbers:

//     the average consumption of the car (l/100km, float)
//     the previous distance travelled (km, integer)

function solve(before, after) {
    // Average fuel used at start = a1 * d1/100
    // a2 = (startfuel + endfuel) / d2
    // endfuel = d2 / 100 * a2 - startfuel
    // endave = endfuel / ((d2-d1) / 100)
    // endave = (d2 / 100 * a2 - (a1 * d1 / 100)) / ((d2 - d1) / 100)
    const fuel1 = before[0] * before[1] / 100;
    const fuel2 = after[0] / 100 * after[1] - fuel1;
    const distance2 = after[1] - before[1];
    const endAve =  (fuel2 / distance2) * 100;

    return Number(endAve.toFixed(1));
}

console.log(solve([7.9, 100], [7.0, 200])); // 6.1
console.log(solve([7.9, 500], [7.0, 600])); // 2.5
console.log(solve([7.9, 100], [7.0, 600])); // 6.8