# Binary Search #

Binary search is an algorithm that finds an element in a sorted collection by adjusting search coverage by halves in each search.

## Steps ##

1. If query equals center element
    1. Return element
2. If query is less than center element
    1. Research with collection reduced to [start, center - 1]
3. If query is greather than center element
    1. Research with collection reduced to [center + 1, end]

## Notes ##

 This algorithm requires a sorted collection and has an algorithmic running time of O(log n)