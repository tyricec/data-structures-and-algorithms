const selectionSort = require('./selectionSort')

test('selectionSort should sort [1,2,3] as [3,2,1]', () => {
  const result = selectionSort([1,2,3], true)

  expect(result).toEqual([3,2,1])
})

test('selectonSort should sort [3,2,1] as [1,2,3]', () => {
  const result = selectionSort([3,2,1])

  expect(result).toEqual([1,2,3])
})