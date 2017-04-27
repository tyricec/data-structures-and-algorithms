const bubbleSort = require('./bubbleSort')

test('bubbleSort sorts [3, 2, 1] to [1, 2, 3]', () => {
  const collection = [3,2,1]

  const result = bubbleSort(collection)

  expect(result).toEqual([1,2,3])
})

test('bubbleSort sorts [1, 2, 3] to [3, 2, 1]', () => {
  const collection = [1,2,3]

  const result = bubbleSort(collection, true)

  expect(result).toEqual([3,2,1])
})
