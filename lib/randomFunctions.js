const alphabet = require('./constants.json').alphabet

function randomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickOne(array) {
    return array[randomNumberInRange(0, array.length-1)]
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

function randomizeSongStructure(numberOfParts, minRepeats, maxRepeats) {
    let structure = []
    for (let i = 0; i < numberOfParts; i++) {
        let repeatsOfThisPart = randomNumberInRange(minRepeats, maxRepeats);
        for (let j = 0; j < repeatsOfThisPart; j++) {
            structure.push(alphabet[i]);
        }
    }
    return shuffleArray(structure);
}

function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
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

module.exports = {
    randomNumberInRange: randomNumberInRange,
    pickOne: pickOne,
    pickSome: pickSome,
    randomizeSongStructure: randomizeSongStructure,
    countOccurrences: countOccurrences
}
