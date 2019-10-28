// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

function mix(s1, s2) {
    const prepper = (str, orig) => {
        const arr = [...str].sort();

        const processed = arr.reduce((v, e, i, a) => {
            if (v[v.length - 1].char === e) {
                v[v.length - 1].count += 1;
            } else {
                v.push({
                    count: 1,
                    char: e,
                    orig: orig
                });
            }
            return v;
        }, [{ count: 0, char: arr[0], orig: orig }]);

        return processed;
    }

    const processor = (elem) => {
        let charStr = '';
        for(let i = 0; i < elem.count; i++)
            charStr += elem.char;
        return `${elem.orig}:${charStr}`;
    }

    const combined = [...prepper(s1, '1'), ...prepper(s2, '2')]
        .sort((c1, c2) => c1.char.localeCompare(c2.char))
        .reduce((v, e, i, a) => {
            if (e.count <= 1 || /\s/.test(e.char))
                return v;
            console.log(e.char)
            console.log(e.count)
            const char = v[v.length - 1];
            if (!v.length || e.char !== char.char)
                v.push(e);
            else if (e.count === char.count)
                char.orig = '=';
            else if (e.count > char.count) {
                char.orig = e.orig;
                char.count = e.count;
            }

            return v;
        }, []).sort((c1, c2) => 10 * (c2.count - c1.count) + 2 * (c2.orig !== '=') + c1.char.localeCompare(c2.char));

    return combined.map(e => {
        /*let output = `${e.orig}:`;
        console.log(e)
        for (let i = 0; i < e.count; i++) {
            output += e.char;
        }*/

        return processor(e);
    }).join('/');
}

//console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
console.log(mix(" In many languages", " there's a pair of functions"))
console.log(mix("Are they here", "yes, they are here"));