const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        let array = []
        expect(shuffleArray(array))
    }),
    test('return an array of the same length as the argument sent in', () => {
        let array = [2,3,4,5,6]
       expect(shuffleArray(array).length).toEqual(array.length)
    })
})