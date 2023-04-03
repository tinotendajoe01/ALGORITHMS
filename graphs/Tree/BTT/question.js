// Practice Questions
// Binary Tree Diameter
// BT-1) Find the diameter of a binary tree.
// A tree’s diameter is the longest possible path from two nodes (it doesn’t need to include the root).
// The length of a diameter is calculated by counting the number of edges on the path.

function diameterOfBinaryTree(root) {
  // Initialize the maximum diameter to 0
  let maxDiameter = 0;

  // Define a recursive DFS function that returns the height of a node's subtree
  function dfs(node) {
    // Base case: if the node is null, return 0
    if (!node) {
      return 0;
    }

    // Recursively calculate the height of the left and right subtrees
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    // Update the maximum diameter with the sum of the heights of the left and right subtrees
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return the maximum height of the left and right subtrees, plus one for the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Call the DFS function on the root node
  dfs(root);

  // Return the maximum diameter
  return maxDiameter;
}

// This function takes a root argument that is the root of the binary tree, and returns the diameter of the tree.

// To find the diameter, we perform a depth-first search (DFS) on the binary tree. For each node, we calculate the heights of its left and right subtrees recursively, and update the maxDiameter variable with the sum of those heights. We also return the maximum height of the left and right subtrees (plus one for the current node) to the parent node.

// At the end of the DFS, maxDiameter contains the diameter of the binary tree, which we return.

// Note that this function has a time complexity of O(n), where n is the number of nodes in the tree, because we visit each node once. Also, the space complexity is O(h), where h is the height of the tree, because the DFS recursion stack can go as deep as the height of the tree.
