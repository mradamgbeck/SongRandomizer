const constants = require('../lib/constants.json')
const defaults = require('../config/generateDefaults')

const {
    randomNumberInRange,
    pickOne,
    pickSome,
    randomizeSongStructure
} = require('../lib/randomFunctions');

function generateSong(inputs) {

    const tempo = randomNumberInRange(
        inputs.tempoLowerBound || defaults.tempoLowerBound,
        inputs.tempoHigherBound || defaults.tempoHigherBound
    );

    const signature = pickOne(constants.signatures);

    const scale = pickOne(constants.scales);

    const availableKeys = inputs.preferredKeys
        ? constants.notes.filter(key => inputs.preferredKeys.includes(key))
        : constants.notes;
    const key = pickOne(availableKeys);

    const numberOfParts = randomNumberInRange(
        inputs.minAmountOfParts || defaults.minAmountOfParts,
        inputs.maxAmountOfParts || defaults.maxAmountOfParts
    );

    if (typeof inputs.usePopularStructure === 'undefined')
        inputs.usePopularStructure = defaults.usePopularStructure
    const songStructure = inputs.usePopularStructure
        ? pickOne(constants.structures)
        : randomizeSongStructure(
            numberOfParts,
            inputs.partRepeatLowerBound || defaults.partRepeatLowerBound,
            inputs.partRepeatHigherBound || defaults.partRepeatHigherBound
        );

    const numberOfDynamics = randomNumberInRange(
        inputs.amountOfDynamicsLower || defaults.amountOfDynamicsLower,
        inputs.amountOfDynamicsHigher || defaults.amountOfDynamicsHigher
    );
    const selectedDynamics = pickSome(constants.dynamics, numberOfDynamics);

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