# Insertion Sort #

The insertion sort algorithm is similar to bubble sort but with an optimistic running time. The insertion sort checks if the previous element should be placed afterwards and only continues until none of its previous elements are. Once that condition is met, it places the element in that position. 

## Steps ##

1. For Each Element starting with the second
    1. Keep track of current element
    2. Keep index of previous element
    3. While previous element is higher in sort order
        - Place the previous element in its next position
        - Place current element at previous index
        - Move index to the next previous element

## Additional Information ##

The insertion sort algorithm has an algorithmic running time of O(n<sup>2</sup>). The difference between this and bubble sort is if the collection is already sorted, it will run O(n) instead.