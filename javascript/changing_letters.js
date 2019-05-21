// https://www.codewars.com/kata/changing-letters/train/javascript

function swap(st) {
    const changed = [...st].map(e => {
        switch (e) {
            case 'a': case 'e': case 'i':
            case 'o': case 'u':
                return e.toUpperCase();
            default:
                return e;
        }
    });

    return changed.join(``);
}