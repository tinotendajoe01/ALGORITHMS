/**
 * In this example, we define a TreeNode class that represents a node in a binary tree, with a value property and left and right child nodes. We also define the breadthFirstSearch function, which takes a root node and a targetValue as input.

The function initializes a queue array with the root node and enters a while loop. In each iteration of the loop, the function takes the first element of the queue using the shift method and assigns it to the currentNode variable.

If currentNode has the targetValue, the function returns the node. Otherwise, it checks if currentNode has a left child or a right child, and if it does, adds them to the end of the queue using the push method. This ensures that the child nodes are searched in the next iteration of the loop.

If the queue is empty and the targetValue has not been found, the function returns null.

Finally, we create a tree object with seven nodes using the TreeNode class and use the breadthFirstSearch function to search for nodes with specific values. The function returns the correct node if it exists in the tree, or null if it does not.
 */
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function breadthFirstSearch(root, targetValue) {
  // Create a queue and add the root node to it
  const queue = [root];

  // Continue searching until the queue is empty
  while (queue.length > 0) {
    // Remove the first node from the queue and process it
    const currentNode = queue.shift();

    // Check if the current node is the target node
    if (currentNode.value === targetValue) {
      // If it is, return the node
      return currentNode;
    }

    // If the current node has a left child, add it to the end of the queue
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    // If the current node has a right child, add it to the end of the queue
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  // If the target node is not found, return null
  return null;
}

// Example usage:
const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(breadthFirstSearch(tree, 5)); // returns TreeNode object with value 5
console.log(breadthFirstSearch(tree, 8)); // returns null

/**
 * The line const currentNode = queue.shift(); removes the first element from the queue array and assigns it to the currentNode variable.

In the context of a breadth-first search algorithm, the shift method is used to remove the first element of the queue because we want to visit the nodes in the order that they were added to the queue. The shift method returns the removed element, which in this case is the first node that was added to the queue.

Once we have removed the first element from the queue and assigned it to the currentNode variable, we can check if it is the node we are looking for, and if not, we add its child nodes to the end of the queue for further searching.

So in summary, the shift method is used to remove the first element of the queue and assign it to a variable so that we can process it and search its child nodes.
 */
