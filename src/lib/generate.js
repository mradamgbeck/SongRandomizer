const alphabet = require('../constants/alphabet')
const dynamics = require('../constants/dynamics')
const signatures = require('../constants/signatures')
const structures = require('../constants/structures')
const notes = require('../constants/notes')
const scales = require('../constants/scales')
const defaults = require('../config/generate-defaults')

const {
    randomNumberInRange,
    pickOne,
    pickSome,
    choosePreferred,
    limitMaximum
} = require('./random-functions');
const {randomizeSongStructure, getScaleForKey, getChordsForScale} = require('./music-functions')

function generateSong(inputs) {

    const tempo = randomNumberInRange(
        inputs.minimumTempo || defaults.minimumTempo,
        inputs.maximumTempo || defaults.maximumTempo
    );

    const availableSignatures = choosePreferred(inputs.preferredSignatures, signatures);
    const signature = pickOne(availableSignatures);

    const availableKeys = choosePreferred(inputs.preferredKeys, notes);
    const key = pickOne(availableKeys);

    const scale = getScaleForKey(key, pickOne(scales));

    const numberOfParts = randomNumberInRange(
        inputs.minAmountOfParts || defaults.minAmountOfParts,
        limitMaximum(inputs.maxAmountOfParts, alphabet) || defaults.maxAmountOfParts
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
        limitMaximum(inputs.maximumAmountOfDynamics, dynamics) || defaults.maximumAmountOfDynamics
    );
    const selectedDynamics = pickSome(dynamics, numberOfDynamics);

    const numberOfInstruments = randomNumberInRange(
        inputs.minimumAmountOfInstruments || defaults.minimumAmountOfInstruments,
        inputs.maximumAmountOfInstruments || defaults.maximumAmountOfInstruments
    );

    const chords = getChordsForScale(scale.notes);

    return {
        tempo: tempo,
        signature: signature,
        key: key,
        scale: scale,
        chords: chords,
        numberOfInstruments: numberOfInstruments,
        dynamics: selectedDynamics,
        structure: songStructure
    };
}

module.exports = {generateSong}