# 19. Remove Nth Node From End of List

[https://leetcode.com/problems/remove-nth-node-from-end-of-list/](link to the question)

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

### Example 1:

```javascript
Input: (head = [1, 2, 3, 4, 5]), (n = 2);
Output: [1, 2, 3, 5];
```

### **Example 2:**

```javascript
Input: (head = [1]), (n = 1);
Output: [];
```

## First approch

Traverse the linked twice times, the first traversal for each tour i will increment a variable to have the size of the list at the end of my traversal.

The second time i will traverse until i found the node that i have to delete then delete it.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;

  // traverse the linked list to have the lenght

  let size = 1;
  let current = head;
  while (current.next) {
    size++;
    current = current.next;
  }

  let i = 0;
  current = head;
  let prev = null;
  while (1) {
    i++;

    if (i === size - (n - 1)) {
      if (prev === null) {
        head = current.next;
      } else {
        prev.next = current.next;
      }
      return head;
    }
    prev = current;
    current = current.next;
  }
};
```

Time Complexity O(n) + O(n) = **O(n)**

Space complexity **O(1)**
