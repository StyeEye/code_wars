// https://www.codewars.com/kata/club-doorman/javascript

// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

// It will be given only words with one doubled letter.

function passTheDoorMan(word) {
    let target = '';
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i - 1]) {
            target = word[i];
            break;
        }
    }

    const number = target.charCodeAt(0) - 96;

    return number * 3;
}

console.log(passTheDoorMan("lettuce"));