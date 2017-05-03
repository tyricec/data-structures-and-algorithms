const mergeSort = require('./mergeSort')

test('mergeSort sorts [2,1] to [1,2]', () => {
  const result = mergeSort([2,1])

  expect(result).toEqual([1,2])
})

test('mergeSort sorts [2,1,3,5,5] to [1,2,3,5,5]', () => {
  const result = mergeSort([2,1,3,5,5])

  expect(result).toEqual([1,2,3,5,5])
})

test('mergeSort sorts [1] as [1]', () => {
  const result = mergeSort([1])

  expect(result).toEqual([1])
})