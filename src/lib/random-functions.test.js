import {expect} from 'chai'
import {
    pickOne,
    pickSome,
    randomNumberInRange,
    shuffleArray,
    getIndexWithWrap,
    choosePreferred
} from './random-functions'

describe('random functions:', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    describe('pick one', () => {
        it('should pick one', () => {
            let output = pickOne(array);
            expect(array).to.include(output);
        });
    });

    describe('pick some', () => {
        it('should pick the correct amount', () => {
            let amount = 3;
            let output = pickSome(array, amount);
            expect(output.length).to.equal(amount);
        });
    });

    describe('random number in range', () => {
        it('should pick between the bounds', () => {
            let lower = 10;
            let higher = 20;
            let output = randomNumberInRange(lower, higher);
            expect(output).to.be.greaterThanOrEqual(lower);
            expect(output).to.be.lessThanOrEqual(higher);
        });
    });

    describe('shuffle array', () => {
        it('should return a shuffled array', () => {
            let output = shuffleArray(array);
            expect(output).to.not.deep.equal(array)
        });
    });

    describe('choosePreferred', () => {
        it('should return just the matching preferred items', () => {
            const preferred = [array[0], array[2], array[4]]
            let output = choosePreferred(preferred, array);
            expect(output).to.not.deep.equal(array)
            expect(output.length).to.equal(preferred.length)
            output.map(item => {
                expect(array).to.include(item)
                expect(preferred).to.include(item)
            })
        });
    });

    describe('get index with wrap', () => {
        it('should return a correctly wrapped element', () => {
            let interval = 5;
            let remainingIndexes = 2;
            let startIndex = array.length - remainingIndexes;
            let output = getIndexWithWrap(array, startIndex, interval);
            let expectedIndex = interval - remainingIndexes;
            let expectedOutput = array[expectedIndex];
            expect(expectedOutput).to.equal(output)
        });

        it('should return a non-wrapped element', () => {
            let interval = 2;
            let remainingIndexes = 5;
            let startIndex = array.length - remainingIndexes;
            let output = getIndexWithWrap(array, startIndex, interval);
            let expectedOutput = array[startIndex + interval];
            expect(expectedOutput).to.equal(output)
        });
    });
});