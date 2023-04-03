// Binary Tree from right side view
// BT-2) Imagine that you are viewing the tree from the right side. What nodes would you see?
function rightSideView(root) {
  // If the root is null, return an empty array
  if (!root) {
    return [];
  }

  // Initialize an empty result array and a queue with the root node
  const result = [];
  const queue = [root];

  // Perform a level-order traversal of the binary tree using a queue
  while (queue.length > 0) {
    // Get the number of nodes in the current level
    const size = queue.length;

    // Traverse all nodes in the current level
    for (let i = 0; i < size; i++) {
      // Remove the first node from the queue
      const node = queue.shift();

      // If this is the rightmost node in the current level, add it to the result array
      if (i === size - 1) {
        result.push(node.val);
      }

      // Add the left and right child of the current node to the queue (if they exist)
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // Return the result array
  return result;
}
/**
 * This function takes a root argument that is the root of the binary tree, and returns an array representing the nodes that you would see from the right side of the tree.

To solve this problem, we perform a level-order traversal of the tree using a queue. At each level, we add the rightmost node to the result array. Then, we add the left child and the right child of each node to the queue (if they exist) for the next level.

At the end of the traversal, result contains the nodes that you would see from the right side of the binary tree.

Note that this function has a time complexity of O(n), where n is the number of nodes in the tree, because we visit each node once. Also, the space complexity is O(w), where w is the maximum width of the tree, because the queue can contain at most one level of the tree at a time.
 */
