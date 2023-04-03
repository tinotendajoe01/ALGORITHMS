class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function preorderDfs(node, targetValue) {
  // If the current node is null (i.e., a leaf node), return null
  if (node === null) {
    return null;
  }

  // If the current node has the target value, return the node
  if (node.value === targetValue) {
    return node;
  }

  // Recursively perform a preorder search on the left subtree
  const leftResult = preorderDfs(node.left, targetValue);

  // If we find the target value in the left subtree, return that node
  if (leftResult !== null) {
    return leftResult;
  }

  // Recursively perform a preorder search on the right subtree
  const rightResult = preorderDfs(node.right, targetValue);

  // If we find the target value in the right subtree, return that node
  if (rightResult !== null) {
    return rightResult;
  }

  // If we reach a leaf node without finding the target value, return null
  return null;
}

function postorderDfs(node, targetValue) {
  // If the current node is null (i.e., a leaf node), return null
  if (node === null) {
    return null;
  }

  // Recursively perform a postorder search on the left subtree
  const leftResult = postorderDfs(node.left, targetValue);

  // If we find the target value in the left subtree, return that node
  if (leftResult !== null) {
    return leftResult;
  }

  // Recursively perform a postorder search on the right subtree
  const rightResult = postorderDfs(node.right, targetValue);

  // If we find the target value in the right subtree, return that node
  if (rightResult !== null) {
    return rightResult;
  }

  // If the current node has the target value, return the node
  if (node.value === targetValue) {
    return node;
  }

  // If we reach a leaf node without finding the target value, return null
  return null;
}

// Example usage:
const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(preorderDfs(tree, 5)); // returns TreeNode object with value 5
console.log(postorderDfs(tree, 5)); // returns TreeNode object with value 5
console.log(preorderDfs(tree, 8)); // returns null
console.log(postorderDfs(tree, 8)); // returns null

// In preorderDfs, we perform a preorder depth-first search on a binary tree to find a node with a specific value. Here's what each step does:

// If the current node is null (i.e., a leaf node), we have reached the end of a branch and return null.
// If the current node has the target value, we have found the node we are looking for and return it.
// We recursively perform a preorder search on the left subtree by calling preorderDfs(node.left, targetValue).
// If the left subtree contains the target value, we return that node. Otherwise, we move on to the right subtree.
// We recursively perform a preorder search on the right subtree by calling preorderDfs(node.right, targetValue).
// If the right subtree contains the target value, we return that node. Otherwise, we have reached a leaf node without finding the value and return null.
// In postorderDfs, we perform a postorder depth-first search on a binary tree to find a node with a specific value. Here's what each step does:

// If the current node is null (i.e., a leaf node), we have reached the end of a branch and return null.
// We recursively perform a postorder search on the left subtree by calling postorderDfs(node.left, targetValue).
// If the left subtree contains the target value, we return that node. Otherwise, we move on to the right subtree.
// We recursively perform a postorder search on the right subtree by calling postorderDfs(node.right, targetValue).
// If the right subtree contains the target value, we return that node. Otherwise, we check if the current node has the target value.
// If the current node has the target value, we have found the node we are looking for and return it. Otherwise, we have reached a leaf node without finding the value and return null.
// I hope this helps!
