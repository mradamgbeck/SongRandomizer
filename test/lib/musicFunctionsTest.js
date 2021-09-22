const expect = require('chai').expect;
const {getScaleForKey, randomizeSongStructure} = require('../../lib/musicFunctions');
const {countOccurrences} = require('../../lib/randomFunctions');

describe('music functions:', () => {
    describe('get scale for key', () => {
        const scale = {
            name: "TEST SCALE",
            interval: [1, 2, 1, 2, 1, 2, 1]
        }
        const expectedNotes = ['C', 'C#', 'D#', 'E', 'F#', 'G', 'A', 'A#'];
        it('should return the correct scale', () => {
            let output = getScaleForKey("C", scale);
            expect(output.name).to.be.equal(scale.name);
            expect(output.notes).to.deep.equal(expectedNotes);
        });
    });

    describe('randomize song structure', () => {
        it('should produce a randomized array with correct repeats', () => {
            let numberOfParts = 3;
            let minRepeats = 4;
            let maxRepeats = 6;
            let output = randomizeSongStructure(numberOfParts, minRepeats, maxRepeats);
            let occurrences = countOccurrences(output);
            let uniqueParts = occurrences[0];
            let numberOfPartA = occurrences[1][0];
            let numberOfPartB = occurrences[1][1];
            let numberOfPartC = occurrences[1][2];

            expect(uniqueParts.length).to.be.equal(numberOfParts);
            expect(numberOfPartA).to.be.greaterThanOrEqual(minRepeats)
                .and.lessThanOrEqual(maxRepeats)
            expect(numberOfPartB).to.be.greaterThanOrEqual(minRepeats)
                .and.lessThanOrEqual(maxRepeats)
            expect(numberOfPartC).to.be.greaterThanOrEqual(minRepeats)
                .and.lessThanOrEqual(maxRepeats)
        });
    });
});