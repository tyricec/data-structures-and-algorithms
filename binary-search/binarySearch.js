const binarySearch = function(collection, query) {
  const center = Math.floor(collection.length / 2)
  if (query === collection[center]) {
    return collection[center]
  }
  if (query < collection[center]) {
    return binarySearch(collection.slice(0, center), query)
  }
  if (query > collection[center]) {
    return binarySearch(collection.slice(center + 1), query)
  }
}

module.exports = binarySearch