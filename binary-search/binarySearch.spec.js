const binarySearch = require('./binarySearch') 

test('binarySearch returns 4 from [1,2,3,4]', () => {
  const result = binarySearch([1,2,3,4], 4)

  expect(result).toBe(4)
})

test('binarySearch returns 2 from [1,2,3,4]', () => {
  const result = binarySearch([1,2,3,4], 2)

  expect(result).toBe(2)
})

test('binarySearch returns 3 from [1,2,3,4]', () => {
  const result = binarySearch([1,2,3,4], 3)

  expect(result).toBe(3)
})

test('binarySearch returns undefined when item is not found', () => {
  const result = binarySearch([1,2,3,4], 5)

  expect(result).toBeUndefined()
})