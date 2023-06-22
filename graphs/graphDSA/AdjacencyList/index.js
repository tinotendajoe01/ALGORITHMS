// Let’s start with the Node class that holds the vertex’s value and adjacent vertices.
// We can also have helper functions for adding and removing adjacent nodes from the list.
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // Array to store adjacent nodes
  }

  addAdjacent(node) {
    this.adjacents.push(node); // Add a node to the list of adjacent nodes
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1); // Remove a node from the list of adjacent nodes
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents; // Return the list of adjacent nodes
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1; // Check if a node is adjacent to this node
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map(); // Map to store nodes
    this.edgeDirection = edgeDirection; // Store the type of graph (directed or undirected)
  }
  // ...
}

Graph.UNDIRECTED = Symbol("undirected graph"); // Symbol to represent an undirected graph (two-way edges)
Graph.DIRECTED = Symbol("directed graph"); // Symbol to represent a directed graph (one-way edges)
