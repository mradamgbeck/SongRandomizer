const dynamics = require('../constants/dynamics')
const alphabet = require('../constants/alphabet')

module.exports = {
    minimumTempo: 1,
    maximumTempo: 999,
    minAmountOfParts: 1,
    maxAmountOfParts: alphabet.length,
    minimumPartRepeats: 1,
    maximumPartRepeats: 10,
    minimumAmountOfDynamics: 1,
    maximumAmountOfDynamics: dynamics.length,
    minimumAmountOfInstruments: 1,
    maximumAmountOfInstruments: 999,
    usePopularStructure: true,
    preferredKeys: [],
    preferredScales: [],
    preferredSignatures: []
}