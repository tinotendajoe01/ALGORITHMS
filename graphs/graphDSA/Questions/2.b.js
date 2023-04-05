class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.graph = new Map();
    for (let i = 0; i < vertices; i++) {
      this.graph.set(i, []);
    }
  }

  addEdge(u, v) {
    this.graph.get(u).push(v);
    this.graph.get(v).push(u);
  }

  // DFS-based function to find bridges
  bridgeDFS(graph, u, visited, parent, low, disc, bridges) {
    visited[u] = true;
    disc[u] = low[u] = visited.length;

    for (const v of graph.get(u)) {
      if (!visited[v]) {
        parent[v] = u;
        this.bridgeDFS(graph, v, visited, parent, low, disc, bridges);

        low[u] = Math.min(low[u], low[v]);

        if (low[v] > disc[u]) {
          bridges.push([u, v]);
        }
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  // Function to find critical paths using DFS
  findCriticalPathsDFS() {
    const visited = new Array(this.V).fill(false);
    const disc = new Array(this.V).fill(Infinity);
    const low = new Array(this.V).fill(Infinity);
    const parent = new Array(this.V).fill(-1);
    const bridges = [];

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

    for (const [u, edges] of this.graph.entries()) {
      for (const v of edges) {
        // Temporarily remove the edge (u, v)
        const index1 = this.graph.get(u).indexOf(v);
        this.graph.get(u).splice(index1, 1);
        const index2 = this.graph.get(v).indexOf(u);
        this.graph.get(v).splice(index2, 1);

        const visited = new Array(this.V).fill(false);
        this.isConnectedBFS(this.graph, u, visited);

        if (visited.includes(false)) {
          bridges.push([u, v]);
        }

        // Add the edge (u, v) back
        this.graph.get(u).push(v);
        this.graph.get(v).push(u);
      }
    }

    return bridges;
  }
}

// Test the functions
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
