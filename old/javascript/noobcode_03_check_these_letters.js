// https://www.codewars.com/kata/57470efebf81fea166001627

function letterCheck(arr) {
    const lowerMain = [...new Set(arr[0].toLowerCase())].sort();
    const lowerSecondary = [...new Set(arr[1].toLowerCase())].sort();

    return lowerSecondary.reduce((v, e) => {
        if (v && lowerMain.includes(e))
            return true;
        else
            return false;
    }, true);
}

console.log(letterCheck(["trances", "nectar"]))
console.log(letterCheck(["compadres", "DRAPES"]))
console.log(letterCheck(["parses", "parsecs"]))