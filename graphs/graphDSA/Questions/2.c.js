// we will use both DFS and BFS to find the critical connections in a network of servers. Critical connections are those connections that, if removed, will increase the number of connected components in the graph.

// Helper function to initialize the graph using the given connections
function buildGraph(connections) {
  const graph = new Map();
  for (const [node1, node2] of connections) {
    if (!graph.has(node1)) graph.set(node1, []);
    if (!graph.has(node2)) graph.set(node2, []);

    graph.get(node1).push(node2);
    graph.get(node2).push(node1);
  }
  return graph;
}

// DFS function to find critical connections using Depth First Search
function dfs(
  graph,
  node,
  visited,
  timestamps,
  parent,
  time,
  criticalConnections
) {
  visited.add(node);
  timestamps[node] = time;

  for (const neighbor of graph.get(node)) {
    if (neighbor === parent) continue;

    if (!visited.has(neighbor)) {
      dfs(
        graph,
        neighbor,
        visited,
        timestamps,
        node,
        time + 1,
        criticalConnections
      );
    }

    timestamps[node] = Math.min(timestamps[node], timestamps[neighbor]);

    if (timestamps[neighbor] > time) {
      criticalConnections.push([node, neighbor]);
    }
  }
}

// Main function to find critical connections using DFS
function findCriticalConnectionsDFS(n, connections) {
  const graph = buildGraph(connections);
  const visited = new Set();
  const timestamps = Array(n).fill(Infinity);
  const criticalConnections = [];

  dfs(graph, 0, visited, timestamps, -1, 0, criticalConnections);

  return criticalConnections;
}

// BFS function to find critical connections using Breadth First Search
function findCriticalConnectionsBFS(n, connections) {
  const graph = buildGraph(connections);
  const visited = new Set();
  const criticalConnections = [];

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      const queue = [[node, -1, 0]]; // [node, parent, depth]

      while (queue.length > 0) {
        const [current, parent, depth] = queue.shift();
        visited.add(current);

        for (const neighbor of graph.get(current)) {
          if (neighbor === parent) continue;

          if (!visited.has(neighbor)) {
            queue.push([neighbor, current, depth + 1]);
          } else if (depth - 1 > timestamps[neighbor]) {
            criticalConnections.push([current, neighbor]);
          }
        }

        timestamps[current] = Math.min(timestamps[current], depth);
      }
    }
  }

  return criticalConnections;
}

// Test
const n = 5;
const connections = [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
];

console.log(
  "Critical connections using DFS:",
  findCriticalConnectionsDFS(n, connections)
);
console.log(
  "Critical connections using BFS:",
  findCriticalConnectionsBFS(n, connections)
);
// This code first creates a helper function buildGraph to build a graph representation of the given connections. Then, two functions are implemented: findCriticalConnectionsDFS and findCriticalConnectionsBFS, which use DFS and BFS, respectively, to find the critical connections in the graph. Both functions return an array containing the critical connections.
