class Graph {
  constructor() {
    this.vertices = {}; // Object to store the vertices/nodes and their edges
  }

  // Adds a vertex to the graph
  addVertex(vertex) {
    this.vertices[vertex] = []; // Initialize an empty array for the vertex's edges
  }

  // Deletes a vertex and all its edges from the graph
  deleteVertex(vertex) {
    // Remove the vertex from the vertices object
    delete this.vertices[vertex];
    // Remove all edges that point to the deleted vertex
    for (const v in this.vertices) {
      this.vertices[v] = this.vertices[v].filter((e) => e !== vertex);
    }
  }

  // Adds an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    // Add vertex2 to vertex1's edges
    this.vertices[vertex1].push(vertex2);
    // Add vertex1 to vertex2's edges (if the graph is undirected)
    // this.vertices[vertex2].push(vertex1);
  }

  // Queries the adjacency of a vertex
  queryAdjacency(vertex) {
    return this.vertices[vertex]; // Returns an array of the vertex's edges
  }

  // Deletes an edge between two vertices in the graph
  deleteEdge(vertex1, vertex2) {
    // Remove vertex2 from vertex1's edges
    this.vertices[vertex1] = this.vertices[vertex1].filter(
      (e) => e !== vertex2
    );
    // Remove vertex1 from vertex2's edges (if the graph is undirected)
    // this.vertices[vertex2] = this.vertices[vertex2].filter((e) => e !== vertex1);
  }
}
// Here's an explanation of each method:

// constructor(): This is the Graph's constructor, which initializes an empty object to store the vertices/nodes and their edges.

// addVertex(vertex): This method adds a new vertex to the graph. It does this by adding a new key to the vertices object with an empty array as its value, which will store the edges of the new vertex.

// deleteVertex(vertex): This method deletes a vertex and all its edges from the graph. It does this by removing the vertex from the vertices object, and then removing any edges that point to the deleted vertex from the edges of the other vertices in the graph.

// addEdge(vertex1, vertex2): This method adds a new edge between two vertices in the graph. It does this by adding vertex2 to the edges of vertex1, and vice versa (if the graph is undirected).

// queryAdjacency(vertex): This method queries the adjacency of a vertex, which means it returns an array of the vertex's edges.

// deleteEdge(vertex1, vertex2): This method deletes an edge between two vertices in the graph. It does this by removing vertex2 from the edges of vertex1, and vice versa (if the graph is undirected).
