const expect = require('chai').expect;
const {generateSong} = require("./generate");
const signatures = require('../constants/signatures')
const structures = require('../constants/structures')
const notes = require('../constants/notes')
const defaults = require('../../src/config/generate-defaults')
const {countOccurrences} = require('../../src/lib/random-functions');
let output;

describe('generate function:', () => {

    describe('with inputs', () => {
        let input = {
            "minimumTempo": 90,
            "maximumTempo": 150,
            "minAmountOfParts": 2,
            "maxAmountOfParts": 4,
            "minimumPartRepeats": 1,
            "maximumPartRepeats": 3,
            "minimumAmountOfDynamics": 2,
            "maximumAmountOfDynamics": 6,
            "minimumAmountOfInstruments": 1,
            "maximumAmountOfInstruments": 6,
            "usePopularStructure": false,
            "preferredKeys": [
                "A",
                "C",
                "E",
                "F#"
            ],
            "preferredSignatures": [
                "3/4",
                "4/4"
            ]
        }

        beforeEach(() => {
            output = generateSong(input);
        });

        it('should return a number of instruments within the bounds', () => {
            expect(output.numberOfInstruments)
                .to.be.greaterThanOrEqual(input.minimumAmountOfInstruments)
                .and.lessThanOrEqual(input.maximumAmountOfInstruments);
        });

        it('should return a tempo within the bounds', () => {
            expect(output.tempo)
                .to.be.greaterThanOrEqual(input.minimumTempo)
                .and.lessThanOrEqual(input.maximumTempo);
        });

        it('should return a key from the preferred keys list', () => {
            expect(output.key).to.be.oneOf(input.preferredKeys);
        });

        it('should return a key from the preferred keys list', () => {
            expect(output.signature).to.be.oneOf(input.preferredSignatures);
        });

        it('should return a scale', () => {
            expect(output.scale.notes.length).to.be.greaterThan(4)
        })

        it('should return a time signature from the list', () => {
            expect(output.signature).to.be.oneOf(signatures);
        });

        it('should pick a number of dynamics within bounds', () => {
            expect(output.dynamics.length)
                .to.be.greaterThanOrEqual(input.minimumAmountOfDynamics)
                .and.lessThanOrEqual(input.maximumAmountOfDynamics);
        });

        it('should generate a structure whose parts repeat within bound', () => {
            let occurrences = countOccurrences(output.structure);
            for (let repeats of occurrences[1]) {
                expect(repeats)
                    .to.be.greaterThanOrEqual(input.minimumPartRepeats)
                    .and.lessThanOrEqual(input.maximumPartRepeats);
            }
        });
    });

    describe('with defaults', () => {

        beforeEach(() => {
            output = generateSong({});
        })

        it('should return a number of instruments within the defaults', () => {
            expect(output.numberOfInstruments)
                .to.be.greaterThanOrEqual(defaults.minimumAmountOfInstruments)
                .and.lessThanOrEqual(defaults.maximumAmountOfInstruments);
        });

        it('should return a tempo within the defaults', () => {
            expect(output.tempo)
                .to.be.greaterThanOrEqual(defaults.minimumTempo)
                .and.lessThanOrEqual(defaults.maximumTempo);
        });

        it('should return a key from the default keys list', () => {
            expect(output.key).to.be.oneOf(notes);
        });

        it('should return a time signature from the default list', () => {
            expect(output.signature).to.be.oneOf(signatures);
        });

        it('should pick a number of dynamics within bounds', () => {
            expect(output.dynamics.length)
                .to.be.greaterThanOrEqual(defaults.minimumAmountOfDynamics)
                .and.lessThanOrEqual(defaults.maximumAmountOfDynamics);
        });

        it('should pick a popular song structure', () => {
            expect(structures).to.include(output.structure)
        });
    });
});



