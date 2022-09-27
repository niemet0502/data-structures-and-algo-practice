function dfs(adjacencyList) {
  const [firstKey] = adjacencyList.keys();
  const stack = [firstKey];
  const result = [];
  const visited = new Set();
  visited.add(firstKey);

  while (stack.length) {
    let current = stack.pop();
    let adjacencyNodes = adjacencyList.get(current);

    for (node of adjacencyNodes) {
      if (!visited.has(node)) {
        result.push(node);
        visited.add(node);
        stack.push(node);
      }
    }
  }

  return result;
}
