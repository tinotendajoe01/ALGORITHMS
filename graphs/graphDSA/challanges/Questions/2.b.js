class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.graph = new Map();

    // Initialize the graph with empty arrays for each vertex
    for (let i = 0; i < vertices; i++) {
      this.graph.set(i, []);
    }
  }

  // Add an edge between vertices u and v
  addEdge(u, v) {
    this.graph.get(u).push(v);
    this.graph.get(v).push(u);
  }

  // DFS-based function to find bridges
  bridgeDFS(graph, u, visited, parent, low, disc, bridges) {
    // Mark the current vertex as visited and assign discovery time and low value
    visited[u] = true;
    disc[u] = low[u] = visited.length;

    // Traverse all adjacent vertices of the current vertex
    for (const v of graph.get(u)) {
      // If v is not visited yet, recur for it
      if (!visited[v]) {
        parent[v] = u;
        this.bridgeDFS(graph, v, visited, parent, low, disc, bridges);

        // Check if the subtree rooted with v has a connection to one of the ancestors of u
        low[u] = Math.min(low[u], low[v]);

        // If the lowest vertex reachable from subtree under v is below u in DFS tree, then u-v is a bridge
        if (low[v] > disc[u]) {
          bridges.push([u, v]);
        }
      } else if (v !== parent[u]) {
        // Update low value of u for parent function calls
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  // Function to find critical paths using DFS
  findCriticalPathsDFS() {
    // Initialize arrays for visited, discovery time, low value, parent, and bridges
    const visited = new Array(this.V).fill(false);
    const disc = new Array(this.V).fill(Infinity);
    const low = new Array(this.V).fill(Infinity);
    const parent = new Array(this.V).fill(-1);
    const bridges = [];

    // Call bridgeDFS for each unvisited vertex in the graph
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.bridgeDFS(this.graph, i, visited, parent, low, disc, bridges);
      }
    }

    return bridges;
  }

  // BFS-based function to check if the graph is connected
  isConnectedBFS(graph, u, visited) {
    const queue = [u];
    visited[u] = true;

    // Traverse all vertices reachable from u using BFS
    while (queue.length > 0) {
      const node = queue.shift();

      for (const neighbor of graph.get(node)) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  // Function to find critical paths using BFS
  findCriticalPathsBFS() {
    const bridges = [];

    // For each edge (u, v), temporarily remove the edge and check if the graph is still connected
    for (const [u, edges] of this.graph.entries()) {
      for (const v of edges) {
        // Temporarily remove the edge (u, v)
        const index1 = this.graph.get(u).indexOf(v);
        this.graph.get(u).splice(index1, 1);
        const index2 = this.graph.get(v).indexOf(u);
        this.graph.get(v).splice(index2, 1);

        // Check if the graph is still connected after removing the edge
        const visited = new Array(this.V).fill(false);
        this.isConnectedBFS(this.graph, u, visited);

        // If the graph is not connected, then (u, v) is a bridge
        if (visited.includes(false)) {
          bridges.push([u, v]);
        }

        // Add the edge (u, v) back to the graph
        this.graph.get(u).push(v);
        this.graph.get(v).push(u);
      }
    }

    return bridges;
  }
}

// Test the functions with a sample graph
const n = 5;
const connections = [
  [1, 0],
  [0, 2],
  [2, 1],
  [0, 3],
  [3, 4],
];

const graph = new Graph(n);
for (const [u, v] of connections) {
  graph.addEdge(u, v);
}

const criticalPathsDFS = graph.findCriticalPathsDFS();
const criticalPathsBFS = graph.findCriticalPathsBFS();

console.log("Critical paths using DFS:", criticalPathsDFS);
console.log("Critical paths using BFS:", criticalPathsBFS);
