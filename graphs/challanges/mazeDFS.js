// This code example uses the Depth First Search algorithm to solve a maze.

// Create a 2D array to represent the maze.
let maze = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1],
];

// Create an object to represent the current position in the maze.
let currentPosition = { x: 0, y: 0 };

// Create a stack to store visited positions in the maze.
let stack = [];

// Create a function to check if the current position is valid or not.
function isValid(x, y) {
  // Check if x and y are within bounds of the maze.

  if (x >= 0 && x < 5 && y >= 0 && y < 5) {
    // Check if there is an obstacle at this position.

    if (maze[x][y] !== 1) {
      return true;
    }
  }

  return false;
}

// Create a function to solve the maze using Depth First Search algorithm.
function solveMaze() {
  // Push the starting position into the stack.

  stack.push(currentPosition);

  while (stack.length > 0) {
    // Pop out the top element from the stack and set it as current position.

    let pos = stack[stack.length - 1];

    // Mark this position as visited by setting it to 2 in our maze array.

    maze[pos["x"]][pos["y"]] = 2;

    // Check if this is our destination point or not by comparing it with (4 , 4).  If yes then we have solved our maze and can break out of
    //    loop by returning true;  Otherwise continue with loop execution by checking all four directions from this point for valid moves and pushing
    //     them into stack for further processing until we find our destination point or until there are no more valid moves left from this point which
    //      will indicate that we have reached a dead end and need to backtrack by popping out elements from stack until we find a valid move again which
    //       will take us closer towards our destination point or until there are no more elements left in stack which will indicate that we have explored
    //        all possible paths but still could not find our destination point and hence failed to solve our maze which will be indicated by returning
    //         false at end of function execution;

    let foundDestination = false;
    foundDestination = pos["x"] === 4 && pos["y"] === 4;
    if (foundDestination === true) {
      return true;
    } else {
      // Move Right
      if (isValid(pos["x"], pos["y"] + 1)) {
        let newPos = { x: pos["x"], y: pos["y"] + 1 };
        stack.push(newPos);
      }
    }
  }
}
solveMaze();
console.log("solveMaze()");
