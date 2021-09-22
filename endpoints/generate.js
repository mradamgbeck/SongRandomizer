const dynamics = require('../constants/dynamics.json')
const signatures = require('../constants/signatures.json')
const structures = require('../constants/structures.json')
const notes = require('../constants/notes.json')
const scales = require('../constants/scales.json')
const defaults = require('../config/generateDefaults')

const {
    randomNumberInRange,
    pickOne,
    pickSome,
} = require('../lib/randomFunctions');
const {randomizeSongStructure, getScaleForKey} = require('../lib/musicFunctions')

function generateSong(inputs) {

    const tempo = randomNumberInRange(
        inputs.tempoLowerBound || defaults.tempoLowerBound,
        inputs.tempoHigherBound || defaults.tempoHigherBound
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
            inputs.partRepeatLowerBound || defaults.partRepeatLowerBound,
            inputs.partRepeatHigherBound || defaults.partRepeatHigherBound
        );

    const numberOfDynamics = randomNumberInRange(
        inputs.amountOfDynamicsLower || defaults.amountOfDynamicsLower,
        inputs.amountOfDynamicsHigher || defaults.amountOfDynamicsHigher
    );
    const selectedDynamics = pickSome(dynamics, numberOfDynamics);

    const numberOfInstruments = randomNumberInRange(
        inputs.amountOfInstrumentsLower || defaults.amountOfInstrumentsLower,
        inputs.amountOfInstrumentsHigher || defaults.amountOfInstrumentsHigher
    );

    const result = {
        key: key,
        dynamics: selectedDynamics,
        numberOfInstruments: numberOfInstruments,
        numberOfParts: numberOfParts,
        scale: scale,
        signature: signature,
        structure: songStructure,
        tempo: tempo
    }

    console.log('INPUT --------------------------------------------');
    console.table(inputs);
    console.log('OUTPUT -------------------------------------------');
    console.table(result);
    return result;
}

module.exports = {generateSong}