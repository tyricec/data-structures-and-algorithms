function mergeSort(collection) {
  let halves = halve(collection)
  return mSort(halves)
}

function halve(collection) {
  var center = Math.floor(collection.length / 2)
  if (collection.length > 1) {
    return [collection.slice(0, center),collection.slice(center,collection.length)]
  }
  return [collection]
}

function mSort(halves) {
  let result = []

  if (halves.length > 1) {
    let a = mergeSort(halves[0])
    let b = mergeSort(halves[1])

    while (a[0] && b[0]) {
      if (a[0] <= b[0]) {
        result.push(a.shift(0))
      }
      else {
        result.push(b.shift(0))
      }
    }

    while (a[0]) {
      result.push(a.shift(0))
    }

    while (b[0]) {
      result.push(b.shift(0))
    }

    return result
  }
  return halves[0]
}

module.exports = mergeSort