function bubbleSort(collection, reverse) {
  let indexToOrder = collection.length - 1

  while (indexToOrder > 0) {
    let currIndex = 0
    for (currIndex; currIndex < indexToOrder; currIndex++) {
      if ((collection[currIndex] > collection[currIndex + 1] && !reverse) ||
         (collection[currIndex] < collection[currIndex + 1] && reverse)) {
        let temp = collection[currIndex]
        collection[currIndex] = collection[currIndex + 1]
        collection[currIndex + 1] = temp
      }
    }
    indexToOrder--
  }
  return collection
}

module.exports = bubbleSort