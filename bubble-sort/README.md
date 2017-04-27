# Bubble Sort #

The bubble sort alogrithm goes through each element and places the ordered element at the end of a collection. This is repeated for all elements.

## Steps ##

### Ascending Order ###

1. Keep track of last element index
2. While index is not 1
    1. For Each Element
        1. If element is larger than it's neighboring element
           - Swap their position
             [5, 4] -> [4, 5]
    2. Decrement index by 1

```
[5, 4, 3, 2] -> [4, 5, 3, 2] -> [4, 3, 5, 2] -> [4, 3, 2, 5]
[4, 3, 2, 5] -> [3, 4, 2, 5] -> [3, 2, 4, 5]
[3, 2, 4, 5] -> [2, 3, 4, 5]
```

### Descending Order ###

1. Keep track of last element index
2. While index is not 0
    1. For Each Element
        1. If element is smaller than it's neighboring element
           - Swap their position
             [4, 5] -> [5, 4]
    2. Decrement index by 1

```
[1, 2, 3, 4] -> [2, 1, 3, 4] -> [2, 3, 1, 4] -> [2, 3, 4, 1]
[2, 3, 4, 1] -> [3, 2, 4, 1] -> [3, 4, 2, 1]
[3, 4, 2, 1] -> [4, 3, 2, 1]
```

## Additional Info ##

The bubble sort alogrithm has an algorithmic running time of *O(n<sum>2</sum>)*