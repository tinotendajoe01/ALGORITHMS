{
  /*
Search Maze
Problem Statement:

Given a 2D array of black and white entries representing a maze with designated
 entrance and exit points, find a path from the entrance to the exit, 
 if one exists. – Aziz, Adnan, et al. Elements of Programming Interviews
We’ll represent the white entries with 0’s and black entries with 1’s.
 The white entries represent open areas and the black entries walls. 
 The entrance and the exit points are represented by an array, 
 the 0th index and the 1st index filled with the row and column indices, respectively.
*/
}
// Solution:

// To move to a different position, we’ll hardcode the four possible movements
// in the directions array (right, bottom, left and top; no diagonal moves):
// [
//   [0, 1],
//   [1, 0],
//   [0, -1],
//   [-1, 0],
// ];

// To keep track of the cells we have already visited, we will replace the white
//  entries (0’s) with black entries (1's). We are basically using DFS recursively
//  to traverse the maze. The base case, that will end the recursion, is either we
//  have reached our exit point and return true or we have visited every white entry
//  and return false.

// Another important thing to keep track of is to ensure that we are within the
//  boundaries of the maze all the time and that we only proceed if we are at a
//   white entry. The isFeasible function will take care of that.
// Time Complexity: O(V+E)
{
  /*
function hasPath
   Start at the entry point
   While exit point has not been reached
     1. Move to the top cell
     2. Check if position is feasible (white cell & within boundary)
     3. Mark cell as visited (turn it into a black cell)
     4. Repeat steps 1-3 for the other 3 directions */
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }
  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex !== destination
    );
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex !== source
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

Graph.prototype.bfs = function (start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
Graph.prototype.dfsRecursive = function (start) {
  const result = [];
  const visited = {};
  const adjacencyList = this.adjacencyList;
  (function dfs(vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);
    adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        return dfs(neighbor);
      }
    });
  })(start);
  return result;
};
Graph.prototype.dfsIterative = function (start) {
  const result = [];
  const stack = [start];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (stack.length) {
    currentVertex = stack.pop();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
};

var hasPath = function (maze, start, destination) {
  maze[start[0]][start[1]] = 1;
  return searchMazeHelper(maze, start, destination);
};
function searchMazeHelper(maze, current, end) {
  // dfs
  if (current[0] == end[0] && current[1] == end[1]) {
    return true;
  }
  let neighborIndices, neighbor;
  // Indices: 0->top,1->right, 2->bottom, 3->left
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (const direction of directions) {
    neighborIndices = [current[0] + direction[0], current[1] + direction[1]];
    if (isFeasible(maze, neighborIndices)) {
      maze[neighborIndices[0]][neighborIndices[1]] = 1;
      if (searchMazeHelper(maze, neighborIndices, end)) {
        return true;
      }
    }
  }
  return false;
}
function isFeasible(maze, indices) {
  let x = indices[0],
    y = indices[1];
  return (
    x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[x].length &&
    maze[x][y] === 0
  );
}
var maze = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
hasPath(maze, [0, 4], [3, 2]);
console.log(hasPath(maze, [0, 0], [4, 4]));
