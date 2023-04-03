class TreeNode {
  // We define a TreeNode class,
  // which represents a single node in the binary search tree (BST).

  //   The constructor method of the TreeNode class takes a single argument
  //   value and initializes three properties: value, which stores the value of
  //    the node, and left and right, which are initially set to null and will
  //    later store references to the left and right child nodes.
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // The insert method of the TreeNode class takes a single argument value and
  //  inserts a new node with the specified value into the BST.
  //   It first checks if the value is less than the value of the
  //    current node (this.value). If it is, it checks if the left
  //    child of the current node is null. If it is, it creates a new
  //    TreeNode object with the specified value and sets it as the
  //    left child of the current node. If the left child is not null,
  //     it recursively calls insert on the left child node.
  //     If the value is greater than or equal to the value of the current node,
  // the same process is repeated using the right child node.
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  //   The search method of the TreeNode class takes a single argument value and
  //   searches the BST for a node with the specified value.
  //   If the value of the current node is equal to the specified value,
  //   it returns the current node. If the value is less than the value of
  //   the current node and the left child is not null,
  //   it recursively calls search on the left child node.
  //   If the value is greater than the value of the current node and the right child
  //   is not null, it recursively calls search on the right child node.
  //   If the value is not found in the BST, it returns null.

  search(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value && this.left !== null) {
      return this.left.search(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.search(value);
    } else {
      return null;
    }
  }
}
//  define a BinarySearchTree class, which represents the entire BST data structure.
//The constructor method of the BinarySearchTree class initializes a single property: root, which is initially set to null.
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //The insert method of the BinarySearchTree class takes a single argument value and inserts a new node with the specified value into the BST. If the root node is null, it creates a new TreeNode object with the specified value and sets it as the root node. If the root node is not null, it calls insert on the root node.
  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.root.insert(value);
    }
  }
  //The search method of the BinarySearchTree class takes a single argument value and searches the BST for a node with the specified value. If the root node is null, it returns null. If the root node is not null, it calls search on the root node.
  search(value) {
    if (this.root === null) {
      return null;
    } else {
      return this.root.search(value);
    }
  }
}

// Example usage
// We create a new BinarySearchTree object called bst and insert several values into it using the insert method.
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.search(4)); // prints TreeNode object with value 4
console.log(bst.search(10)); // prints null
// In this implementation, the TreeNode class represents a single node in the BST,
//  and the BinarySearchTree class represents the entire BST.
//   The insert method on the TreeNode class adds a new node with the specified value
//   to the BST, maintaining the BST property that the left child is less than or
//    equal to the parent node, and the right child is greater than or equal to the
//     parent node. The search method on the TreeNode class searches the BST for a
//     node with the specified value and returns the node if found, or null if not
//     found.

// The insert method on the BinarySearchTree class inserts a new node with the
//  specified value into the BST by calling insert on the root node if it exists,
//   or creating a new root node if it does not. The search method on the
//   BinarySearchTree class searches the BST for a node with the specified value by
//   calling search on the root node if it exists, or returning null if it does not.
