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
