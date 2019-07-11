// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function allSubstrings(input) {
    const output = [];
    const { length } = input;

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const substring = input.substring(i, j + 1);
            output.push(substring);
        }
    }

    return output;
}

// Expected Output: ["d", "do", "dog", "o", "og", "g"]
console.log(allSubstrings("dog"));
// Expected Output: hello = ["h","he","hel","hell","hello","e","el","ell","ello","l","ll","llo","l","lo","o"]
console.log(allSubstrings("hello"));
// Expected Output: devmountain=['d','de','dev','devm','devmo','devmou','devmoun','devmount','devmounta','devmountai','devmountain','e','ev','evm','evmo','evmou','evmoun','evmount','evmounta','evmountai','evmountain','v','vm','vmo','vmou','vmoun','vmount','vmounta','vmountai','vmountain','m','mo','mou','moun','mount','mounta','mountai','mountain','o','ou','oun','ount','ounta','ountai','ountain','u','un','unt','unta','untai','untain','n','nt','nta','ntai','ntain','t','ta','tai','tain','a','ai','ain','i','in','n']
console.log(allSubstrings("devmountain"));