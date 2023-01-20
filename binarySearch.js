// Binary search is an algorithm for already sorted arrays that returns an index of the number that we searh for.
// Logic: On each iteration it compares searching element with the element which is placed precisely in the middle of our input array.
// If searching element is bigger than the element in the middle, binarySearch continues running in the part of input array after the middle element.
// If it is smaller it continues running in the part of the input array before the middle element.
// After comparison of the middle and searching elements algorithm again finds the middle element of the part that has been picked for search and implements the same logic.
// It continues working untill it finally finds the index of needed element.

const input = [2, 4, 6, 18, 20, 21, 30, 33, 34];

const binarySearch = (arr, searchNmb) => {

};

binarySearch(input, 18); // expect ->