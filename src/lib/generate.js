const dynamics = require('../constants/dynamics')
const signatures = require('../constants/signatures')
const structures = require('../constants/structures')
const notes = require('../constants/notes')
const scales = require('../constants/scales')
const defaults = require('../config/generateDefaults')

const {
    randomNumberInRange,
    pickOne,
    pickSome,
} = require('./randomFunctions');
const {randomizeSongStructure, getScaleForKey, getChordsForScale} = require('./musicFunctions')

function generateSong(inputs) {

    const tempo = randomNumberInRange(
        inputs.minimumTempo || defaults.minimumTempo,
        inputs.maximumTempo || defaults.maximumTempo
    );

    const signature = pickOne(signatures);

    const availableKeys = inputs.preferredKeys && inputs.preferredKeys.length > 0
        ? notes.filter(key => inputs.preferredKeys.includes(key))
        : notes;
    const key = pickOne(availableKeys);

    const scale = getScaleForKey(key, pickOne(scales));

    const numberOfParts = randomNumberInRange(
        inputs.minAmountOfParts || defaults.minAmountOfParts,
        inputs.maxAmountOfParts || defaults.maxAmountOfParts
    );

    if (typeof inputs.usePopularStructure === 'undefined')
        inputs.usePopularStructure = defaults.usePopularStructure
    const songStructure = inputs.usePopularStructure
        ? pickOne(structures)
        : randomizeSongStructure(
            numberOfParts,
            inputs.minimumPartRepeats || defaults.minimumPartRepeats,
            inputs.maximumPartRepeats || defaults.maximumPartRepeats
        );

    const numberOfDynamics = randomNumberInRange(
        inputs.minimumAmountOfDynamics || defaults.minimumAmountOfDynamics,
        inputs.maximumAmountOfDynamics || defaults.maximumAmountOfDynamics
    );
    const selectedDynamics = pickSome(dynamics, numberOfDynamics);

    const numberOfInstruments = randomNumberInRange(
        inputs.minimumAmountOfInstruments || defaults.minimumAmountOfInstruments,
        inputs.maximumAmountOfInstruments || defaults.maximumAmountOfInstruments
    );

    const chords = getChordsForScale(scale.notes);

    const result = {
        tempo: tempo,
        signature: signature,
        key: key,
        scale: scale,
        chords: chords,
        numberOfInstruments: numberOfInstruments,
        dynamics: selectedDynamics,
        structure: songStructure
    }

    console.log('INPUT --------------------------------------------');
    console.log(inputs);
    console.log('OUTPUT -------------------------------------------');
    console.log(result);
    return result;
}

module.exports = {generateSong}