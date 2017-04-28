const insertionSort = require('./insertionSort')

test('insertionSort sorts [3,2,1] to [1,2,3]', () => {
  const result = insertionSort([3,2,1])

  expect(result).toEqual([1,2,3])
})

test('insertionSort sorts [1,2,3] to [3,2,1] when reversed', () => {
  const result = insertionSort([1,2,3], true)

  expect(result).toEqual([3,2,1])
})