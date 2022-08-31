function dfsPreOrderRecursive(node, arr = []) {
  if (node) {
    arr.push(node.val);
    if (node.left) return dfsPreOrderRecursive(node.left, arr);
    if (node.right) return dfsPreOrderRecursive(node.right, arr);
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
