Imagine that you have a bunch of friends, and you want to draw a picture that shows who is friends with who. You could draw a bunch of circles (which we call "nodes" or "vertices") to represent each friend, and then draw lines (which we call "edges") between the circles to show who is friends with who.

That picture you drew is called a "graph"! Graphs are a way to show how different things are connected to each other. You can use graphs to show anything that has connections between different parts, like social networks, road maps, or computer networks.

Graphs can look really different depending on what you're using them for. For example, a social network graph might have circles for each person and lines between them to show who is friends with who. A road map graph might have circles for each city and lines between them to show the roads that connect them. And a computer network graph might have circles for each computer or server and lines between them to show how they're connected together.

The cool thing about graphs is that they can help you figure out things that might be hard to see just by looking at the individual parts. For example, if you wanted to figure out the shortest route between two cities on a road map, you could use a graph to help you find it! You could start at one city and follow the lines (roads) to get to the other city, and then count how many lines (roads) you took to get there.

So, a graph is a way to show how different things are connected to each other, and it can help you figure out things that might be hard to see just by looking at the individual parts.

In JavaScript, a graph is a data structure that represents a collection of items (called "nodes" or "vertices") and the connections between them (called "edges"). Each node can have multiple edges that connect it to other nodes.

There are two main types of graphs: directed and undirected. In a directed graph, the edges have a direction (like a one-way street), so you can only go from one node to another along the direction of the edge. In an undirected graph, the edges have no direction (like a two-way street), so you can go from one node to another in either direction along the edge.

Here's an example of an undirected graph in JavaScript:

```
const graph = {
A: ["B", "C"],
B: ["A", "D"],
C: ["A", "D"],
D: ["B", "C"],
};
```

In this graph, there are four nodes `(A, B, C, and D)` and six edges that connect them. Node A has edges to nodes B and C, node B has edges to nodes A and D, and so on.

To represent a graph in JavaScript, you can use an object where the keys are the node labels and the values are arrays of the labels of the nodes that are connected by edges. For example, in the graph above, the key "A" has the value `["B", "C"]`, which means that node A has edges to nodes B and C.

There are many different algorithms that you can use with graphs, like finding the shortest path between two nodes, finding all the nodes that are connected to a given node, or finding the shortest path that visits all the nodes in the graph. These algorithms can be used in many different applications, like computer networking, social network analysis, and route planning.

So, in summary, a graph in JavaScript is a data structure that represents a collection of nodes and edges, and it can be used to solve many different problems by applying different algorithms to it.

```

```

In this section, we will delve into non-linear data structures such as graphs. We will examine the core concepts and common uses of these structures. You may not be aware, but you are likely already utilizing programs that employ graphs and trees. For example, if you want to find the quickest route from your job to your house, graph algorithms can provide the answer! We will explore this and other interesting problems in this article.

## Basics of Graphs

A graph is a data structure where a node can have zero or more adjacent vertices. The connection between two vertices is called an edge. Nodes can also be called vertices.

The degree of a vertex is the number of edges connected to it. If the edges are bidirectional, then we have an undirected graph. If the edges have a direction, then we have a directed graph or di-graph for short. You can think of it as a one-way street (directed) or a two-way street (undirected).

A graph can have cycles, which means you could visit the same vertex more than once. A graph without cycles is called an acyclic graph.

Not all vertices have to be connected in a graph. You might have isolated nodes or even separated subgraphs. If all nodes have at least one edge, then we have a connected graph. When all nodes are connected to all other nodes, then we have a complete graph.

## Applications of Graphs

Graphs have many real-world applications in various domains. Here are a few examples:

- Airline Traffic:

  - Node/vertex: Airport
  - Edges: Direct flights between two airports
  - Weight: Miles between two airports

- GPS Navigation:

  - Node: Road intersection
  - Edge: Road
  - Weight: Time required to go from one intersection to another

- Networks Routing:

  - Node: Server
  - Edge: Data link
  - Weight: Connection speed

- Electronic circuits
- Flight reservations
- Driving directions
- Telcom: Cell tower frequency planning
- Social networks (e.g., Facebook uses a graph for suggesting friends)
- Recommendations (e.g., Amazon/Netflix uses graphs to make product/movie suggestions)
- Logistics planning for delivering goods

## Methods of Representing Graphs

There are two primary ways of representing a graph:

- Adjacency List
- Adjacency Matrix

Breadth-First Search:
Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores the neighbor nodes first, before moving to the next level neighbors.

Depth-First Search:
Depth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking. The DFS algorithm traverses down a path, one level at a time, until it reaches a leaf node or a dead end before backtracking to explore other paths in the tree/graph structure.

// JavaScript code example for Depth-First Search:

```
function dfs(graph, startNode) { let visited = new Set(); function traverse(node) { visited.add(node); for (let neighbor of graph[node]) { if (!visited.has(neighbor)) { traverse(neighbor); } } } traverse(startNode); }

```
