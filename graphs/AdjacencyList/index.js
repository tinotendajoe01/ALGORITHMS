// Let’s start with the Node class that holds the vertex’s value and adjacent vertices.
//  We can also have helper functions for adding and removing adjacent nodes from the list.

class Node {
  constructore(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }
  getAdjacents() {
    return this.adjacents;
  }
  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }
  // ...
}

Graph.UNDIRECTED = Symbol("undirected graph"); // two-ways edges
Graph.DIRECTED = Symbol("directed graph"); // one-way edges
