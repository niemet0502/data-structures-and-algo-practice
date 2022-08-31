function dfsPreOrderRecursive(node, arr = []) {
  if (node) {
    arr.push(node.val);
    if (node.left) dfsPreOrderRecursive(node.left, arr);
    if (node.right) dfsPreOrderRecursive(node.right, arr);
  }

  return arr;
}

function dfsPreOrderIterative(root) {
  const stack = [root];
  const result = [];
  let curr;

  while (stack.length) {
    curr = stack.pop();

    result.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return result;
}

function dfsInOrderRecursive(node, arr = []) {
  if (node) {
    if (node.left) dfsInOrderRecursive(node.left, arr);
    arr.push(node.val);
    if (node.right) dfsInOrderRecursive(node.right, arr);
  }

  return arr;
}

function dfsInOrderIterative(root) {
  const stack = [];
  const result = [];
  let curr = root;

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
}

function dfsPostOrderRecursive(node, arr = []) {
  if (node) {
    if (node.left) dfsPostOrderRecursive(node.left, arr);
    if (node.right) dfsPostOrderRecursive(node.right, arr);

    arr.push(node.val);
  }

  return arr;
}

function dfsPostOrderIterative(root) {
  const s1 = [root];
  const s2 = [];
  let current;

  while (s1.length) {
    current = s1.pop();

    if (current.left) s1.push(current.left);
    if (current.right) s1.push(current.right);

    s2.push(current.val);
  }

  return s2.reverse();
}
