// Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking.

// Below is a simple example of a Depth-First Search algorithm implemented in JavaScript:

function DFS(root) {
  // Create an empty stack and push root node
  let stack = [];
  stack.push(root);
  // Create a visited array and mark root node as visited
  let visited = [];
  visited[root] = true;
  // Loop until stack is empty
  while (stack.length > 0) {
    // Pop top element from stack and print it
    let currentNode = stack.pop();
    // Get all adjacent nodes of the popped element s
    for (let i in currentNode.adjacent) {
      if (!visited[currentNode.adjacent[i]]) {
        visited[currentNode.adjacent[i]] = true;
        stack.push(currentNode.adjacent[i]);
      }
    }
  }
}

// Using OOP Create a graph class
class Graph {
  // Constructor
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  // Add a vertex to the graph
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  // Add an edge between two nodes in the graph
  addEdge(node1, node2) {
    // Unidirectional Graph
    this.adjacentList[node1].push(node2);

    // Bidirectional Graph
    this.adjacentList[node2].push(node1);
  }

  // Implement the Depth-First Search algorithm
  dfs(startingNode) {
    const result = []; // Store visited nodes in an array

    const visited = {}; // Store visited nodes in an object to avoid visiting them again

    const adjacencyList = this.adjacentList; // Get adjacency list from the graph object

    (function dfsHelper(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;

      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfsHelper(neighbor);
        }
      });
    })(startingNode);

    return result;
  }
}
