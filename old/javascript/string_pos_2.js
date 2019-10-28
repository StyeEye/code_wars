// https://www.codewars.com/kata/the-position-of-a-digital-string-in-a-infinite-digital-string

function findPosition(num) {
    let smallest = num[0] === '0' ? Number(1 + num) : Number(num);

    const Finder = function (numStr) {
        // Utilities
        this.digitLoop = [...`0123456789`];

        this.getNextDigit = function (digit) {
            let index = this.digitLoop.indexOf(digit);
            index = (index + 1) % 10;
            return this.digitLoop[index];
        };

        this.incrementString = function (valueString) {
            const incrementDigit = (target, index) => {
                if (index < 0)
                    return 1 + target;

                const next = this.getNextDigit(target[index]);
                let out = target.slice(0, index) + next + target.slice(index + 1);
                if (next === '0')
                    out = incrementDigit(out, index - 1);
                //console.log(next, out)
                return out;
            }
            return incrementDigit(valueString, valueString.length - 1);
        }

        this.incrementSpecial = function (valueString) {
            const incrementDigit = (target, index) => {
                if (index < 0)
                    return target;

                const next = this.getNextDigit(target[index]);
                let out = target.slice(0, index) + next + target.slice(index + 1);
                if (next === '0')
                    out = incrementDigit(out, index - 1);
                console.log(index)
                //if(index === 0 && target[0] === `0` && next === `1`)
                    //out = '0' + out;
                return out;
            }
            return incrementDigit(valueString, valueString.length - 1);
        }

        // Var setup
        this.numString = numStr;

        this.minNums = [];
        this.trueNums = [];

        let minDecimals = 1;
        for (let i = 0, consecZeros = 0; i < numStr.length; i++) {
            if (numStr[i] === '0')
                consecZeros++;
            else
                consecZeros = 0;
            minDecimals = Math.max(minDecimals, consecZeros + 1);
        }
        this.minDecis = minDecimals;
        console.log(minDecimals)

        // Core functionality
        this.checkAll = function () {
            let baseSize = 1;
            while (baseSize <= this.numString.length) {
                // Increase the size if any zeros are encountered
                //console.log(this.numString);
                const currentDigit = baseSize - 1;
                const nextDigit = currentDigit + 1;
                if (nextDigit < this.numString.length && (this.numString[nextDigit] === `0`)) {
                    baseSize++;
                    continue;
                }

                const base = this.numString.slice(0, baseSize);
                const remainder = this.numString.slice(baseSize);

                console.log(base, remainder);

                this.matchRest(base, remainder);
                ++baseSize;
            }

            let min = Number(this.numString);
            let mindex = 0;
            if(this.numString[0] === `0`) {
                min = Number(`1` + this.numString);
                mindex = -1;
            }
            console.log(min)
            //min += 1;
            //let min = Number(this.numString);
            this.trueNums.forEach(e => {
                console.log(e.numbers)
                e.numbers.forEach(n => {
                    console.log(min)
                    console.log(e.index, e.numbers)
                    if (Number(n) < min) {
                        min = n;
                        mindex = e.index;
                    }
                    if (Number(n) === Number(min) && mindex < e.index) {
                        mindex = e.index;
                    }
                });
            });
            console.log(min);
            console.log(mindex);

            console.log(this.findPos(min, mindex))
            return this.findPos(min, mindex);
        }
        this.matchRest = function (base, remainder) {
            // Search for any possible 'chains' first
            const basePlus1 = this.incrementSpecial(base);
            console.log(base, basePlus1);
            //console.log(`test`);
            for (let matchIndex = remainder.indexOf(basePlus1); matchIndex != -1;
                matchIndex = remainder.indexOf(basePlus1, matchIndex + basePlus1.length)) {

                const fullMatch = remainder.slice(0, matchIndex + basePlus1.length);
                const fullRemainder = remainder.slice(matchIndex + basePlus1.length);
                console.log(fullMatch, fullRemainder);
                const result = fullRemainder ? this.matchChain(fullMatch, fullRemainder) : false;
                console.log(basePlus1, result);
                if (result) {
                    this.minNums.push(fullMatch);
                    this.trueNums.push({ index: base.length, numbers: this.minNums });
                }
                this.minNums = [];
                }
            //const chain = this.matchChain(base, remainder);
            ///if(chain)
                //this.trueNums.push({ index: base.length, numbers: this.minNums })
            //this.minNums = [];


            // Find the smallest possible number if there is no chaining
            const foundMatch = this.matchStart(base, remainder);
            console.log(foundMatch);
            if (foundMatch)
                this.trueNums.push({ index: base.length, numbers: this.minNums })
            this.minNums = [];

            console.log(remainder, basePlus1)
            let finalNum = remainder + basePlus1;
            if (finalNum && finalNum[0] === `0` && remainder)
                finalNum = `1` + finalNum;
            if(remainder)
                this.trueNums.push({ index: basePlus1.length, numbers: [finalNum] })
            console.log(finalNum);
        }
        this.matchChain = function (base, remainder) {
            console.log(base, remainder);
            const zeroOffset = base[0] === `0` ? 1 : 0;
            let nextBase = this.incrementString(base);
            const nextPos = remainder.indexOf(nextBase, zeroOffset);
            console.log(nextPos);
            console.log(nextBase, nextPos, remainder);
            if (nextPos === 0) {
                const nextRemainder = remainder.slice(nextBase.length);
                console.log(remainder.slice(0, nextBase.length), nextRemainder, nextBase)
                if (!nextRemainder || this.matchChain(nextBase, nextRemainder)) {
                    console.log(remainder.slice(0, nextBase.length))
                    this.minNums.push(remainder.slice(0, nextBase.length));
                    return true;
                }
                else
                    return false;
            }
            else if (nextPos === -1) {
                if ((nextBase.length) <= remainder.length)
                    return false;
                console.log(nextBase)
                console.log(remainder)
                for (let i = 0; i < remainder.length; ++i) {
                    if (nextBase[i] !== remainder[i])
                        return false;
                }
                if(zeroOffset)
                    nextBase = `0` + nextBase;
                console.log(nextBase, remainder)
                this.matchStart(nextBase, remainder)
                return true;
            }
            else
                return false;
        }
        // Figures out the smallest possible number containing both base and the start sequence
        this.matchStart = function (base, start) {
            if (!base.length || !start.length)
                return false;
            
            let start0s = 0;
            // Number of elems in start that can match any value
            // Effectively increases size of 'base' by one digit
            const zeroOffset = base[0] === `0` ? 1 : 0;
            
            const nextBase = this.incrementSpecial(base);
            let foundMatch = false;
            let startIndex = Math.max(start.length - nextBase.length, 0);

            console.log(nextBase, start, startIndex, start.length);
            for (let i = startIndex, j = 0; i < start.length; ++i, ++j) {
                console.log(start, i, start[i], nextBase[0], zeroOffset)
                if (start[i] !== nextBase[0] || (zeroOffset && i === 0))
                    continue;

                // overflow controlled by current index and base length
                // index + start length - base length = overflow?
                const trimSize = Math.max(i + base.length - start.length + zeroOffset, 0);
                const trimmedEnd = nextBase.slice(0, nextBase.length - trimSize + zeroOffset);
                console.log(trimmedEnd, i, trimSize, zeroOffset, start);

                const outOffset = start.indexOf(trimmedEnd, i);
                const result = start.slice(0, i) + nextBase;
                console.log(start.indexOf(trimmedEnd, i))
                if ((start.indexOf(trimmedEnd, i) !== -1) && (result.length >= this.minDecis)) {
                    console.log(start.indexOf(trimmedEnd, i), zeroOffset)
                    foundMatch = true;
                    console.log(result);
                    this.minNums.push(result);
                    break;
                }
            }

            return foundMatch;
        }
        this.getImpliedSize = function (base) { }
        this.findPos = function (num, offset) {
            num = Number(num);
            offset = Number(offset);
            // 1-9, index = start, total = 9
            // 10-99, index = , total = 90/180/189
            // 100-999, ..., total = 900/2700/2889
            // each extra decimal place adds 9*10^(place)*(place) digits
            let digits = 1;
            let baseVal = 0;
            for (let size = Math.pow(10, digits); (num / size) >= 1; size = Math.pow(10, ++digits)) {
                baseVal += 9 * digits * Math.pow(10, digits - 1);
            }
            console.log(num, baseVal);

            const remainder = num - Math.pow(10, digits - 1);
            const remainingSize = remainder * digits;
            console.log(remainder, remainingSize, digits, offset)

            return remainingSize + baseVal - offset;
        }
    }

    const finder = new Finder(num);
    return finder.checkAll();
    // Ideas round ?
    // Chain of functions that calc minium sizes of chains
    // -1 is invalid and to be discarded?
    // Basic steps of main bit
    // Grab the 'ending' based on increasing size. keep the 0  increase behaviour
    // pass the end and the rest into a func to scan for bits
    // allow some sort of chaining funcs to continue scanning for bits
    // if the scanning funcs can't find a match, scan for stuff at end
    // if nothing, calculate the minum size it would have to be as appropriate
    // make each func return array of min sizes?
    // make sure funcs looking for full things won't false trigger
}

//const finder = New Finder(`111213`);
//findPosition(`00110021003100`);
console.log(findPosition(`09`))
//console.log(findPosition(`12345678910`));