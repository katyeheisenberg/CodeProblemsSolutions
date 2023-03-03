// Quick sort algorithm - is divide and conquer algorithm
//  It picks an element as a pivot and partitions the given array around the picked pivot.
// There are many different versions of quickSort that pick pivot in different ways.
// Worst time complexity = O(N * N), normal time complexity = O(log N * N)

const arr = [3, 2, 1, 5, 3, 11, 0, 333, -1, -99];

const quickSort = (arr) => { // <--- This code example wrote without any mutations
  if (arr.length < 2) {
    return arr
  };

  const middleIndex = Math.floor(arr.length / 2)
  const pivot = arr[middleIndex]; // <-- here pivot element is in the middle of array. It helps to reduce the amount of iterations needed to find solution.
  // const pivot = arr[0] <-- here pivot element is the first element of the array. In this case the amount of iterations needed slightly increases.
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i += 1) { // <-- Also if we use pivot element arr[0](first one) in the for loop we i to be equal to 1
    if (i === middleIndex) {
      continue;
    }
    if (arr[i] <= pivot) {
      less = [...less, arr[i]]
    } else {
      greater = [...greater, arr[i]]
    };
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
};

console.log(quickSort(arr)); // expect -> [ 0, 1,  2, 3, 3, 5, 11 ]


const quickSort2 = (arr) => { // <-- This code example wrote with mutations
  return helper(arr, 0, arr.length - 1)
};

function helper(arr, left, right) {
  if (arr.length < 2) {
    return arr
  }
  const index = partition(arr, left, right)
  if (left < index - 1) {
    helper(arr, left, index - 1)
  }
  if (index < right) {
    helper(arr, index, right)
  }
  return arr
};

function partition(arr, left, right) {
  const pivot = arr[Math.floor(( left + right )/ 2)];
  while(left <= right) {
    while(arr[left] < pivot) {
      left += 1
    }

    while(arr[right] > pivot) {
      right -= 1
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1
      right -= 1
    }
  }

  return left
};

// console.log(quickSort2(arr)); // expect -> [ 0, 1,  2, 3, 3, 5, 11 ]
