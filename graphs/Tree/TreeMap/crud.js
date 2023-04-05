// Represents a node in the binary search tree
class TreeNode {
  constructor(key, value) {
    this.key = key; // The key for this node
    this.value = value; // The value associated with this key
    this.left = null; // Pointer to the left child node
    this.right = null; // Pointer to the right child node
  }
}

// Represents a binary search tree with key-value pairs
class TreeMap {
  constructor() {
    this.root = null; // Pointer to the root node of the tree
    this.size = 0; // The number of nodes in the tree
  }

  // Getters and setters for the size property
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  // Inserts a key-value pair into the tree
  insert(key, value) {
    this.root = this._insert(this.root, key, value);
    this.size++;
  }

  // Recursive helper function for insert()
  _insert(node, key, value) {
    if (node === null) {
      return new TreeNode(key, value);
    } else if (key < node.key) {
      node.left = this._insert(node.left, key, value);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key, value);
    } else {
      node.value = value;
    }
    return node;
  }

  // Deletes a key-value pair from the tree
  delete(key) {
    this.root = this._delete(this.root, key);
    if (this.root !== null) {
      this.size--;
    }
  }

  // Recursive helper function for delete()
  _delete(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.key) {
      node.left = this._delete(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._delete(node.right, key);
      return node;
    } else {
      // Case 1: The node has no children
      if (node.left === null && node.right === null) {
        return null;
      }
      // Case 2: The node has one child
      else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // Case 3: The node has two children
      else {
        let [successor, parentOfSuccessor] = this._findSuccessor(node.right);
        node.key = successor.key;
        node.value = successor.value;
        if (parentOfSuccessor !== node) {
          parentOfSuccessor.left = successor.right;
        } else {
          node.right = successor.right;
        }
        return node;
      }
    }
  }

  // Finds and returns the successor of the given node, along with its parent node
  _findSuccessor(node) {
    let parent = null;
    while (node.left !== null) {
      parent = node;
      node = node.left;
    }
    return [node, parent];
  }

  // Returns the value associated with the given key, or null if the key is not found in the tree
  get(key) {
    let node = this.root;
    while (node !== null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node.value;
      }
    }
    return null;
  }
}
// Here's an explanation of the functions:

// insert(key, value): Inserts the key-value pair into the tree. It calls the _insert() helper function recursively to traverse the tree and find the appropriate location for the new node.

// _insert(node, key, value): A recursive helper function for insert() that inserts the key-value pair into the appropriate location in the tree. If the node is null, it creates a new node with the given key-value pair. If the key is less than the node's key, it recursively calls _insert() on the left child. If the key is greater than the node's key, it recursively calls _insert() on the right child. If the key is equal to the node's key, it updates the node's value.

// delete(key): Deletes the key-value pair from the tree. It calls the _delete() helper function recursively to traverse the tree and find the node to delete.

// _delete(node, key): A recursive helper function for delete() that deletes the node with the given key from the tree. If the node is
