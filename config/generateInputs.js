const constants = require("../lib/constants.json");
module.exports = {
    tempoLowerBound: process.env['SR_TEMPO_LOWER'] || 1,
    tempoHigherBound: process.env['SR_TEMPO_HIGHER'] || 999,
    minAmountOfParts: process.env['SR_MIN_AMOUNT_PARTS'] || 1,
    maxAmountOfParts: process.env['SR_MAX_AMOUNT_PARTS'] || 26,
    partRepeatLowerBound: process.env['SR_PART_REPEAT_LOWER'] || 1,
    partRepeatHigherBound: process.env['SR_PART_REPEAT_HIGHER'] || 4,
    amountOfDynamicsLower: process.env['SR_DYNAMICS_LOWER'] || 1,
    amountOfDynamicsHigher: process.env['SR_DYNAMICS_HIGHER'] || constants.dynamics.length,
    amountOfInstrumentsLower: process.env['SR_INSTRUMENTS_LOWER'] || 1,
    amountOfInstrumentsHigher: process.env['SR_INSTRUMENTS_HIGHER'] || 999,
    popularStructure: process.env['SR_USE_POP_STRUCTURE'] === 'true',
    preferredKeys: process.env['SR_PREFERRED_KEYS'] || constants.notes
}