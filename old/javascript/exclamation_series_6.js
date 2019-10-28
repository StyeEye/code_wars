// https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right/train/javascript

function remove(s, n) {
    return Array.from(s)
        .filter(e => !(e === '!' && n-- > 0))
        .join('');
}