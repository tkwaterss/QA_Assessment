const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test('returned array length is correct', () => {
        expect(shuffleArray(testArr).length).toEqual(testArr.length)
    })
    test('Returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toEqual(true)
    })
    test('still contains same content', () => {
        let newArr = shuffleArray(testArr);
        let answer = true
        for (let i = 0; i < testArr.length; i++) {
            if(!newArr.includes(testArr[i])) {
                answer = false;
            }
        }
        expect(answer).toBe(true)
    })
})