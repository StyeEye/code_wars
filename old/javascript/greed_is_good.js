// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll

function score(dice) {
    const numberCounts = dice.reduce((counts, e) => {
        counts[e]++;

        return counts;
    }, {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        })

    let score = 0;
    for (side in numberCounts) {
        const sideNumber = Number(side);
        let count = numberCounts[side];

        if (count >= 3) {
            if (sideNumber === 1)
                score += 1000;
            else
                score += sideNumber * 100;

            count -= 3;
        }

        if (count > 0) {
            if (sideNumber === 5)
                score += 50 * count;
            else if (sideNumber === 1)
                score += 100 * count;
        }
    }

    return score;
}

console.log(score([4, 4, 4, 3, 3]))
console.log(score([2, 4, 4, 5, 4]))