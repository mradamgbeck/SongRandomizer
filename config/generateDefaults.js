const constants = require("../lib/constants.json");

module.exports = {
    "tempoLowerBound": 1,
    "tempoHigherBound": 999,
    "minAmountOfParts": 1,
    "maxAmountOfParts": constants.alphabet.length,
    "partRepeatLowerBound": 1,
    "partRepeatHigherBound": 10,
    "amountOfDynamicsLower": 1,
    "amountOfDynamicsHigher": constants.dynamics.length,
    "amountOfInstrumentsLower": 1,
    "amountOfInstrumentsHigher": 999,
    "popularStructure": true,
    "preferredKeys": []
}