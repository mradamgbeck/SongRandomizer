const alphabet = require("../constants/alphabet.json");
const notes = require('../constants/notes.json')
const numerals = require('../constants/numerals.json')
const {randomNumberInRange, shuffleArray, getIndexWithWrap} = require("./randomFunctions");

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

function getScaleForKey(key, scale) {
    let interval = scale.interval;
    let scaleNotes = []
    scaleNotes.push(notes[notes.indexOf(key)])
    for (let step of interval) {
        let previousNote = scaleNotes[scaleNotes.length - 1];
        scaleNotes.push(getIndexWithWrap(notes, notes.indexOf(previousNote), step));
    }
    return {
        name: scale.name,
        notes: scaleNotes
    };
}

function getChordsForScale(notes) {
    let chords = {}
    let triads = []
    for (let note of notes) {
        let triad = []
        triad.push(note);
        triad.push(getIndexWithWrap(notes, notes.indexOf(note), 2));
        triad.push(getIndexWithWrap(notes, notes.indexOf(note), 4));
        triads.push(triad);
    }
    for (let triad of triads) {
        chords[numerals.lowercase[triads.indexOf(triad)]] = triad
    }
    return chords;
}

module.exports = {
    randomizeSongStructure: randomizeSongStructure,
    getScaleForKey: getScaleForKey,
    getChordsForScale: getChordsForScale
}