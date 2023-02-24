// JavaScript code example for Breadth-First Search:

function BFS(root) {
  // Create an empty queue and enqueue root node
  let queue = [];
  queue.push(root);

  // Create a visited array and mark root node as visited
  let visited = [];
  visited[root] = true;

  // Loop until queue is empty
  while (queue.length > 0) {
    // Dequeue a node from queue and print it
    let currentNode = queue.shift();

    // Get all adjacent nodes of the dequeued node s. If an adjacent has not been visited, then mark it visited and enqueue it
    for (let i in currentNode.adjacent) {
      if (!visited[currentNode.adjacent[i]]) {
        visited[currentNode.adjacent[i]] = true;

        queue.push(currentNode.adjacent[i]);
      }
    }
  }
}
