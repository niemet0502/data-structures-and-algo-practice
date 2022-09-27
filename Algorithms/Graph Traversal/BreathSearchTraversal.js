function bfs(adjacencyList) {
  const [firstKey] = adjacencyList.keys();

  const visited = new Set();
  visited.add(firstKey);

  const queue = [firstKey];

  const result = [];

  while (queue.length) {
    current = queue.shift();
    adjacencyNodes = adjacencyList.get(current);

    for (const node of adjacencyNodes) {
      if (!visited.has(node)) {
        result.push(node);
        visited.add(node);
        queue.push(node);
      }
    }
  }

  return result;
}
