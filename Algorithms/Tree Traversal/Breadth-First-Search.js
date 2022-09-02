function bfs(root) {
  const queue = [root];
  const result = [];
  let curr;

  while (queue.length) {
    curr = queue.shift();
    result.push(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return result;
}
