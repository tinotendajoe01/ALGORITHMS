// Preorder traversal: node, left, right
function preorderDfs(node, callback) {
  if (!node) {
    return;
  }
  callback(node);
  preorderDfs(node.left, callback);
  preorderDfs(node.right, callback);
}

// Inorder traversal: left, node, right
function inorderDfs(node, callback) {
  if (!node) {
    return;
  }
  inorderDfs(node.left, callback);
  callback(node);
  inorderDfs(node.right, callback);
}

// Postorder traversal: left, right, node
function postorderDfs(node, callback) {
  if (!node) {
    return;
  }
  postorderDfs(node.left, callback);
  postorderDfs(node.right, callback);
  callback(node);
}
// Let's go through each function and explain how it works:

// Preorder traversal
function preorderDfs(node, callback) {
  if (!node) {
    return;
  }
  callback(node);
  preorderDfs(node.left, callback);
  preorderDfs(node.right, callback);
}
// In a preorder traversal, we first visit the current node, then recursively visit the left subtree, and then recursively visit the right subtree.

// The preorderDfs function takes a node argument that is the root of the tree, and a callback argument that is a function to be called on each node. If the node is null or undefined, the function returns immediately.

// Otherwise, the function calls the callback function on the current node. Then, it recursively calls preorderDfs on the left subtree and then on the right subtree.

// Inorder traversal
function inorderDfs(node, callback) {
  if (!node) {
    return;
  }
  inorderDfs(node.left, callback);
  callback(node);
  inorderDfs(node.right, callback);
}
// In an inorder traversal, we first recursively visit the left subtree, then visit the current node, and finally recursively visit the right subtree.

// The inorderDfs function takes a node argument that is the root of the tree, and a callback argument that is a function to be called on each node. If the node is null or undefined, the function returns immediately.

// Otherwise, the function recursively calls inorderDfs on the left subtree, then calls the callback function on the current node, and finally recursively calls inorderDfs on the right subtree.

// Postorder traversal
function postorderDfs(node, callback) {
  if (!node) {
    return;
  }
  postorderDfs(node.left, callback);
  postorderDfs(node.right, callback);
  callback(node);
}
// In a postorder traversal, we first recursively visit the left subtree, then recursively visit the right subtree, and finally visit the current node.

// The postorderDfs function takes a node argument that is the root of the tree, and a callback argument that is a function to be called on each node. If the node is null or undefined, the function returns immediately.

// Otherwise, the function recursively calls postorderDfs on the left subtree, then on the right subtree, and finally calls the callback function on the current node.
