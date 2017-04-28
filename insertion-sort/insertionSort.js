function insertionSort(collection, reverse) {
  let currentIndex = 1

  for (currentIndex; currentIndex < collection.length; currentIndex++) {
    let currentElement = collection[currentIndex]
    let previousIndex = currentIndex - 1

    while (previousIndex >= 0 &&
          ((currentElement < collection[previousIndex]) && !reverse) ||
          (currentElement > collection[previousIndex] && reverse)) {
      collection[previousIndex + 1] = collection[previousIndex]
      previousIndex -= 1
    }
    collection[previousIndex + 1] = currentElement
  }

  return collection
}

module.exports = insertionSort