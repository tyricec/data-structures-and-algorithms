function selectionSort(collection, reverse) {
  for (let top = collection.length - 1; top > 0; top--) {
    let largestIndex = top
    for (let index = 0; index < top; index++) {
      if ((collection[index] > collection[largestIndex] && !reverse) || 
         (collection[index] < collection[largestIndex] && reverse)) {
        largestIndex = index
      }
    }
    if (largestIndex != top) {
      let temp = collection[top]
      collection[top] = collection[largestIndex]
      collection[largestIndex] = temp
    }
  }

  return collection
}

module.exports = selectionSort