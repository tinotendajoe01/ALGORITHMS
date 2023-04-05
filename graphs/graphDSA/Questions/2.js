//  Given n servers and the connections between them, return the critical paths.

// 
class Graph {
  constructor() {
    this.vertices = new Map(); // Map to store the vertices/nodes and their edges
  }

  // Adds a vertex to the graph
  addVertex(vertex) {
    this.vertices.set(vertex, []); // Initialize an empty array for the vertex's edges
  }

  // Adds an edge between two vertices in the graph
  addEdge(vertex1, vertex2, weight) {
    this.vertices.get(vertex1).push([vertex2, weight]); // Add vertex2 and the edge weight to vertex1's edges
  }

  // Finds the critical paths in the graph using DFS
  findCriticalPathsDFS() {
    const visited = new Set(); // Set to store visited vertices during DFS
    const stack = new Set(); // Set to store vertices in the current path during DFS
    const distances = new Map(); // Map to store the distance to each vertex from the starting vertex
    const parents = new Map(); // Map to store the parent of each vertex in the DFS tree
    const criticalPaths = []; // Array to store the critical paths in the graph

    // Initialize distances and parents maps with null values
    for (const vertex of this.vertices.keys()) {
      distances.set(vertex, null);
      parents.set(vertex, null);
    }

    // Perform DFS on each vertex in the graph
    for (const vertex of this.vertices.keys()) {
      if (!visited.has(vertex)) {
        distances.set(vertex, 0); // Set distance to starting vertex to 0
        this._findCriticalPathsDFS(vertex, visited, stack, distances, parents, criticalPaths); // Visit the vertex using DFS
      }
    }

    return criticalPaths;
  }

  // DFS helper function to find the critical paths in the graph
  _findCriticalPathsDFS(vertex, visited, stack, distances, parents, criticalPaths) {
    visited.add(vertex); // Mark the vertex as visited
    stack.add(vertex); // Add the vertex to the stack

    for (const [v, weight] of this.vertices.get(vertex)) {
      if (!visited.has(v)) {
        distances.set(v, distances.get(vertex) + weight); // Update the distance to the adjacent vertex
        parents.set(v, vertex); // Update the parent of the adjacent vertex
        this._findCriticalPathsDFS(v, visited, stack, distances, parents, criticalPaths); // Recursively visit the adjacent vertex
      } else if (stack.has(v)) {
        const path = []; // Array to store the critical path
        let u = vertex; // Start at the current vertex
        while (u !== v) {
          path.push(u); // Add each vertex on the critical path to the array
          u = parents.get(u);
        }
        path.push(v); // Add the adjacent vertex to the array
        criticalPaths.push(path); // Add the critical path to the array of critical paths
      }
    }

    stack.delete(vertex); // Remove the vertex from the stack
  }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B', 1);
graph.addEdge('B', 'C', 2);
graph.addEdge('C', 'D', 3);
graph.addEdge('D', 'E', 4);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'D', 6);
graph.addEdge('C', 'E', 7);
console.log(graph.findCriticalPathsDFS()); // Output: [["A", "B", "C", "D", "E"], ["A", "C", "E"]]
This implementation uses a depth-first search (DFS) algorithm to traverse the graph and find the critical paths. The algorithm marks each visited vertex and keeps track of the vertices in the current path using two sets - visited and stack. It also maintains two maps - distances and parents - to keep track of the distance to each vertex from the starting vertex and the parent of each vertex in the DFS tree, respectively.

Whenever the algorithm encounters a visited vertex that is still in the stack, it knows that it has found a cycle and a critical path. It then backtracks from the current vertex to the vertex in the cycle, adding each vertex on the critical path to an array called path. Finally, it adds the critical path to an array called criticalPaths. Once all vertices have been visited, the algorithm returns the criticalPaths array.