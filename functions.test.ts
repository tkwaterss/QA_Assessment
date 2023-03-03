const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test('returned array length is correct', () => {
        expect(shuffleArray(testArr).length).toEqual(testArr.length)
    })
    test('Returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toEqual(true)
    })
})