// Check if it’s possible to take all courses while satisfying their prerequisites.

class Graph {
  constructor() {
    this.vertices = new Map(); // Map to store the vertices/nodes and their edges
  }

  // Adds a vertex to the graph
  addVertex(vertex) {
    this.vertices.set(vertex, []); // Initialize an empty array for the vertex's edges
  }

  // Adds an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2); // Add vertex2 to vertex1's edges
  }

  // DFS helper function to check if a vertex has a cycle
  _hasCycleDFS(vertex, visited, stack) {
    visited.add(vertex); // Mark the vertex as visited
    stack.add(vertex); // Add the vertex to the stack

    for (const v of this.vertices.get(vertex)) {
      if (!visited.has(v)) {
        if (this._hasCycleDFS(v, visited, stack)) {
          return true;
        }
      } else if (stack.has(v)) {
        return true;
      }
    }

    stack.delete(vertex); // Remove the vertex from the stack
    return false;
  }

  // BFS helper function to get the in-degree of each vertex
  _getInDegreeBFS() {
    const inDegree = new Map(); // Map to store the in-degree of each vertex
    for (const vertex of this.vertices.keys()) {
      inDegree.set(vertex, 0); // Initialize the in-degree of each vertex to 0
    }

    for (const [vertex, edges] of this.vertices.entries()) {
      for (const v of edges) {
        inDegree.set(v, inDegree.get(v) + 1); // Increment the in-degree of each vertex that is a prerequisite
      }
    }

    return inDegree;
  }

  // Checks if it's possible to take all courses while satisfying their prerequisites using DFS
  canFinishDFS() {
    const visited = new Set(); // Set to store visited vertices
    const stack = new Set(); // Set to store vertices on the current path

    for (const vertex of this.vertices.keys()) {
      if (!visited.has(vertex)) {
        if (this._hasCycleDFS(vertex, visited, stack)) {
          return false; // If a cycle is found, return false
        }
      }
    }

    return true; // If no cycle is found, return true
  }

  // Checks if it's possible to take all courses while satisfying their prerequisites using BFS
  canFinishBFS() {
    const inDegree = this._getInDegreeBFS(); // Get the in-degree of each vertex using BFS
    const queue = []; // Queue to store vertices with in-degree 0

    for (const [vertex, degree] of inDegree.entries()) {
      if (degree === 0) {
        queue.push(vertex); // Add vertices with in-degree 0 to the queue
      }
    }

    let count = 0; // Counter for the number of vertices with in-degree 0
    while (queue.length > 0) {
      const vertex = queue.shift(); // Dequeue a vertex with in-degree 0
      count++; // Increment the counter

      for (const v of this.vertices.get(vertex)) {
        inDegree.set(v, inDegree.get(v) - 1); // Decrement the in-degree of each vertex that depends on the dequeued vertex
        if (inDegree.get(v) === 0) {
          queue.push(v); // Add vertices with in-degree 0 to the queue
        }
      }
    }

    return count === this.vertices.size; // If all vertices have been dequeued, return true; otherwise, return false
  }
}
// Here's an explanation of each method:

// constructor(): This is the Graph's constructor, which initializes an empty Map to store the vertices/nodes and their edges.

// addVertex(vertex): This method adds a new vertex to the graph. It does this by adding a new key-value pair to the Map, where the key is the vertex label and the value is an empty array that will store the edges of the new vertex.

// addEdge(vertex1, vertex2): This method adds a new edge between two vertices in the graph. It does this by adding vertex2 to the edges of vertex1.
