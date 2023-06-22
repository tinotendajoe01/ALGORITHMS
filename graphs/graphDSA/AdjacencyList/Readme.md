# Graph Implementation in JavaScript

JavaScript implementation of a Graph data structure, along with a Node class that represents the vertices of the graph.

## Introduction

The code consists of two classes: Node and Graph. The Node class represents a vertex in the graph, and the Graph class represents the overall graph data structure. The Node class has helper functions for adding and removing adjacent nodes from the list.

## Node Class

The Node class has the following methods:

- `constructor(value)`: Initializes a new Node object with the given value and an empty array to store adjacent nodes.
- `addAdjacent(node)`: Adds the given node to the list of adjacent nodes.
- `removeAdjacent(node)`: Removes the given node from the list of adjacent nodes.
- `getAdjacents()`: Returns an array of adjacent nodes.
- `isAdjacent(node)`: Checks if the given node is adjacent to the current node.

## Graph Class

The Graph class represents a graph and has the following properties and methods:

- `constructor(edgeDirection)`: Initializes a new Graph object with an optional `edgeDirection` parameter to specify whether the graph is directed or undirected.
- `nodes`: A Map object that stores the nodes of the graph.
- `edgeDirection`: Represents the type of the graph (directed or undirected).

## Usage

To use this code, follow these steps:

1. Create new instances of the Node class to represent the vertices of the graph.
2. Use the Node class methods to add or remove adjacent nodes as needed.
3. Create a new instance of the Graph class, optionally specifying the `edgeDirection` parameter to indicate whether the graph is directed or undirected.
4. Add the Node objects to the Graph using the Map data structure.
5. Perform graph operations as required, using the methods provided by the Node and Graph classes.

## Example

see code
