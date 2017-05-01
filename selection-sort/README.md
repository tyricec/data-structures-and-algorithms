# Selection Sort #

Selection sort involves finding an item to swap for top position in the collection. Difference between selection sort and bubble sort, is that this uses less swap operations. The algorithmic running time is still O(n<sup>2</sup>)

## Steps ##

1. Set last element in collection as *top* element
2. Until *top* element is the second element in the collection
    1. For each element
        1. If element is higher than *current top* element
            1. Keep track of this element for swap
    2. If there is an element higher in sort order than *top* element
        1. Swap elements
    3. Set new *top* element as previous element