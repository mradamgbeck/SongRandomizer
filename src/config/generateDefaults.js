const dynamics = require('../constants/dynamics.json')
const alphabet = require('../constants/alphabet.json')

module.exports = {
    "tempoLowerBound": 1,
    "tempoHigherBound": 999,
    "minAmountOfParts": 1,
    "maxAmountOfParts": alphabet.length,
    "partRepeatLowerBound": 1,
    "partRepeatHigherBound": 10,
    "amountOfDynamicsLower": 1,
    "amountOfDynamicsHigher": dynamics.length,
    "amountOfInstrumentsLower": 1,
    "amountOfInstrumentsHigher": 999,
    "usePopularStructure": true,
    "preferredKeys": []
}