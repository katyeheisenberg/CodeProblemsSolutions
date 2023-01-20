// Binary search is an algorithm for already sorted arrays that returns an index of the number that we searh for.
// Logic: On each iteration it compares searching element with the element which is placed precisely in the middle of our input array.
// If searching element is bigger than the element in the middle, binarySearch continues running in the part of input array after the middle element.
// If it is smaller it continues running in the part of the input array before the middle element.
// After comparison of the middle and searching elements algorithm again finds the middle element of the part that has been picked for search and implements the same logic.
// It continues working untill it finally finds the index of needed element.
// Worst case for the binary search would be: O(log N)
// For instance, if there is 1 million elements in our input array the amount of iteration to find the solution would be equal to just 30.
// Thus, binary search is extremely useful when we need to find exact person, telephone number or the name of the book.

const binarySearch = (arr, searchNmb) => {
  let left = -1;
  let right = arr.length;
  while (right - left > 1) {
    const middle = Math.floor((left + right) / 2);
    if (searchNmb === arr[middle]) {
      return middle;
    };
    if (searchNmb < arr[middle]) {
      right = middle;
    } else {
      left = middle;
    };
  }
  return false
};

console.log(binarySearch([2, 4, 6, 18, 20, 21, 30, 33, 34], 18)); // expect -> 3
console.log(binarySearch([2, 4, 6, 18, 20, 21, 30, 33, 34], 30)); // expect -> 6
console.log(binarySearch([2], 2)); // expect -> 0
console.log(binarySearch([ 1, 2 ], 2)); // expect -> 1
console.log(binarySearch([ 1 ], 2)); // expect -> false