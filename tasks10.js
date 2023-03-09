// 1481. Least Number of Unique Integers after K Removals
// Given an array of integers arr and an integer k.
// Find the least number of unique integers after removing exactly k elements.

// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// Constraints:
//     1 <= arr.length <= 10^5
//     1 <= arr[i] <= 10^9
//     0 <= k <= arr.length

const findLeastNumOfUniqueInts = (arr, k) => {
  if (arr.length === 1 && k === 0) return arr.length;

  if (arr.length === 1 && k > 0) return 0;

  if (arr.length === k) return 0;

  if (k === 0) {
    return arr.filter((it, index) => arr.indexOf(it) === index).length;
  }

  const map = arr.reduce((acc, curr) => {

        acc[curr] = acc[curr] ? acc[curr] + 1: 1;

        return acc;

    }, {});

  let values = Object.values(map);

  values.sort((a, b) => a - b);
  
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] === 1) {
      values.shift();

      i -= 1;

      k -= 1;
    }

    if (values[i] > 1) {
      values[i] -= 1;

      i -= 1;

      k -= 1;
    }

    if (k === 0) {
      break;
    }
  }

  return values.length;
};


const findLeastNumOfUniqueInts2 = (arr, k) => {

    arr.sort()

    const counts = arr.reduce((acc, curr) => {

        acc[curr] = acc[curr] ? acc[curr] + 1: 1;

        return acc;

    }, {});



    arr.sort((a, b) => counts[a] - counts[b]);

    return new Set(arr.slice(k)).size;

};
