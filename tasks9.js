// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Constraints:
//    The number of the nodes in the list is in the range [0, 104].
//     -105 <= Node.val <= 105
//     pos is -1 or a valid index in the linked-list.

const hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;

    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};


// The reverse function which reverses string

function reverse(word) {
    let backwards = '';
    let index = word.length - 1;
    while(index >= 0) {
      backwards += word[index]
      index -= 1;
    }
    return backwards
  };

  console.log(reverse('streee'))



// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Constraints:
//     The number of nodes in the list is in the range [0, 104].
//     1 <= Node.val <= 50
//     0 <= val <= 50


const removeElements = function(head, val) {  //TC = 0(1) SC = 0(N)
    let edgeNode = new ListNode(-1, head);
    let current = edgeNode;

    while(current.next !== null) {
        if(current.next.val === val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return edgeNode.next
};

const foo = (nmb) => {
  let result = nmb;
  return {
    add(int) {
      result += int
      return this
    },
    sub(int) {
      result -= int
      return this
    },
    mul(int) {
      result = result * int
      return this
    },
    div(int) {
      result = result / int
      return this
    },
    val() {
      return result
    }
  }
}
const calc = foo(0);
console.log(calc.add(5).mul(4).div(10).sub(1).val())


// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// Constraints:
//     0 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     nums is a non-decreasing array.
//     -109 <= target <= 109
const nums = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9];
const target = 4;

const searchRange = function (nums, target) {
  return [getF(nums, target), getL(nums, target)];
};

function getF(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (target <= nums[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return nums[right] === target ? right : -1;
}

function getL(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (target >= nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return nums[left] === target ? left : -1;
}

console.log(searchRange(nums, target)) // expect -> [3, 11]


// Given a string and a number.
// Return array with strings from a original one. Note that the length of each string must me equal to the given number or less.

const slice = (str, int) => {
  return str.split('').reduce((acc, letter) => {
    if(acc[acc.length - 1].length < int) {
      acc[acc.length - 1] += letter
      return acc
    }
    return [...acc, letter]
  }, [''])
};

console.log(slice('abababababababab', 5))


// You're given an array and a number. Write a function which will return an array with two numbers from the given array whose summary will be equal to a given number.
// In case there're no such numbers - return emptu array
// Optimal solution: TC=O(N), SC=0(1)

const findSum = (arr, n) => {
  let right = arr.length - 1;
  let left = 0;
  while(left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === n) {
      return [arr[left], arr[right]]
    }
    if(sum < n) {
      left += 1
    } else {
      right -= 1
    }
  }
  return []
};

console.log(findSum([-3, 0, 1, 3, 4], 5)) // expect -> [1, 4]
console.log(findSum([-3, 0, 1, 3, 4, 5], 6)) // expect [1, 5]

// 1491. Average Salary Excluding the Minimum and Maximum Salary
// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Constraints:
//     3 <= salary.length <= 100
//     1000 <= salary[i] <= 106
//     All the integers of salary are unique.

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const pivot = arr[middleIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === middleIndex) {
      continue;
    }
    if (arr[i] <= pivot) {
      less = [...less, arr[i]];
    } else {
      greater = [...greater, arr[i]];
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};
const average = (salary) => {
  let sortedSalary = quickSort(salary);
  sortedSalary.pop();
  sortedSalary.shift();
  let length = sortedSalary.length;
  return sortedSalary.reduce((acc, rec) => {
    return acc + rec / length;
  }, 0);
};

console.log(average([1000, 5000, 4000, 2000])) // expect -> 3000
console.log(average([1000, 5000, 6000, 9000, 4000, 2000])) // expect -> 4250
