/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;

  function insert(root, item) {
    var temp = new ListNode();
    temp.val = item;
    temp.next = root;
    root = temp;
    return root;
  }

  let queue = [];
  let current = head;
  while (current) {
    queue.unshift(current.val);
    current = current.next;
  }

  head = null;
  for (let i = queue.length - 1; i >= 0; i--) {
    let node = new ListNode(queue[i], null);
    if (head === null) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
  }

  return head;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * I can understand this approach but i know it's better that mine in term of space complexity
 */

var reverseList = function (head) {
  let previous = null;
  let tempNode;
  while (head != null) {
    tempNode = head.next;
    head.next = previous;
    previous = head;
    head = tempNode;
  }
  return previous;
};
