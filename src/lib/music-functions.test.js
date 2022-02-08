const expect = require('chai').expect;
const {getScaleForKey, randomizeSongStructure, getChordsForScale} = require('../../src/lib/music-functions');
const {countOccurrences, getIndexWithWrap} = require('../../src/lib/random-functions');

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

    describe('get chords for scale', () => {
        it('should return a proper triad for each note', () => {
            let scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
            let chords = getChordsForScale(scale);
            expect(chords.length).to.be.equal(scale.length)
            for (let chord of chords) {
                let triad = chord.triad;
                for (let i = 0; i < triad.length; i++) {
                    let thisNote = triad[i];
                    expect(scale).to.include(thisNote);
                    if (i < triad.length - 1) {
                        let nextNote = triad[i + 1];
                        let expectedNextNote = scale[scale.indexOf(
                            getIndexWithWrap(scale, scale.indexOf(thisNote), 2))];
                        expect(nextNote).to.be.equal(expectedNextNote)
                    }
                }
            }
        })
    })
});