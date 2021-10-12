function pickOne(array) {
    return array[randomNumberInRange(0, array.length - 1)]
}

function pickSome(array, amount) {
    let input = array.slice();
    let result = [];
    for (let i = 0; i < amount; i++) {
        let selection = pickOne(input);
        if (result.indexOf(selection) === -1) {
            result.push(selection);
            const valueToRemove = input.indexOf(selection);
            input.splice(valueToRemove, 1);
        }
    }
    return result;
}

function choosePreferred(preferred, wholeSet) {
    return preferred && preferred.length > 0
        ? wholeSet.filter(item => preferred.includes(item))
        : wholeSet;
}

function randomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countOccurrences(array) {
    let a = [],
        b = [],
        arr = [...array],
        prev;

    arr.sort();
    for (let element of arr) {
        if (element !== prev) {
            a.push(element);
            b.push(1);
        } else ++b[b.length - 1];
        prev = element;
    }
    return [a, b];
}

function shuffleArray(array) {
    let clone = array.slice()
    let curId = clone.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = clone[curId];
        clone[curId] = clone[randId];
        clone[randId] = tmp;
    }
    return clone;
}

function getIndexWithWrap(array, startIndex, interval) {
    let remainingIndices = array.length - startIndex;
    let nextIndex = array.length < startIndex + interval + 1
        ? Math.abs(interval - remainingIndices)
        : startIndex + interval;
    return array[nextIndex]
}

module.exports = {
    randomNumberInRange: randomNumberInRange,
    pickOne: pickOne,
    pickSome: pickSome,
    countOccurrences: countOccurrences,
    shuffleArray: shuffleArray,
    getIndexWithWrap: getIndexWithWrap,
    choosePreferred: choosePreferred
}
