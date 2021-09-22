const expect = require('chai').expect;
const {generateSong} = require("../../endpoints/generate");
const signatures = require('../../constants/signatures.json')
const structures = require('../../constants/structures.json')
const notes = require('../../constants/notes.json')
const defaults = require('../../config/generateDefaults.js')
const {countOccurrences} = require('../../lib/randomFunctions');
let output;

describe('generate function:', () => {

    describe('with inputs', () => {
        let input = {
            "tempoLowerBound": 90,
            "tempoHigherBound": 150,
            "minAmountOfParts": 2,
            "maxAmountOfParts": 4,
            "partRepeatLowerBound": 1,
            "partRepeatHigherBound": 3,
            "amountOfDynamicsLower": 2,
            "amountOfDynamicsHigher": 6,
            "amountOfInstrumentsLower": 1,
            "amountOfInstrumentsHigher": 6,
            "usePopularStructure": false,
            "preferredKeys": [
                "A",
                "C",
                "E",
                "F#"
            ]
        }

        beforeEach('setup', () => {
            output = generateSong(input);
        });

        it('should return a number of instruments within the bounds', () => {
            expect(output.numberOfInstruments)
                .to.be.greaterThanOrEqual(input.amountOfInstrumentsLower)
                .and.lessThanOrEqual(input.amountOfInstrumentsHigher);
        });

        it('should return a tempo within the bounds', () => {
            expect(output.tempo)
                .to.be.greaterThanOrEqual(input.tempoLowerBound)
                .and.lessThanOrEqual(input.tempoHigherBound);
        });

        it('should return a key from the preferred keys list', () => {
            expect(output.key).to.be.oneOf(input.preferredKeys);
        });

        it('should return a scale', () => {
            expect(output.scale.notes.length).to.be.greaterThan(4)
        })

        it('should return a time signature from the list', () => {
            expect(output.signature).to.be.oneOf(signatures);
        });

        it('should pick a number of dynamics within bounds', () => {
            expect(output.dynamics.length)
                .to.be.greaterThanOrEqual(input.amountOfDynamicsLower)
                .and.lessThanOrEqual(input.amountOfDynamicsHigher);
        });

        it('should generate a structure whose parts repeat within bound', () => {
            let occurrences = countOccurrences(output.structure);
            for (let repeats of occurrences[1]) {
                expect(repeats)
                    .to.be.greaterThanOrEqual(input.partRepeatLowerBound)
                    .and.lessThanOrEqual(input.partRepeatHigherBound);
            }
        });
    });

    describe('with defaults', () => {

        beforeEach('setup', () => {
            output = generateSong({});
        })

        it('should return a number of instruments within the defaults', () => {
            expect(output.numberOfInstruments)
                .to.be.greaterThanOrEqual(defaults.amountOfInstrumentsLower)
                .and.lessThanOrEqual(defaults.amountOfInstrumentsHigher);
        });

        it('should return a tempo within the defaults', () => {
            expect(output.tempo)
                .to.be.greaterThanOrEqual(defaults.tempoLowerBound)
                .and.lessThanOrEqual(defaults.tempoHigherBound);
        });

        it('should return a key from the default keys list', () => {
            expect(output.key).to.be.oneOf(notes);
        });

        it('should return a time signature from the default list', () => {
            expect(output.signature).to.be.oneOf(signatures);
        });

        it('should pick a number of dynamics within bounds', () => {
            expect(output.dynamics.length)
                .to.be.greaterThanOrEqual(defaults.amountOfDynamicsLower)
                .and.lessThanOrEqual(defaults.amountOfDynamicsHigher);
        });

        it('should pick a popular song structure', () => {
            expect(structures).to.include(output.structure)
        });
    });
});



