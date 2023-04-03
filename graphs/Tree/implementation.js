// We define a TreeNode class,
//  which represents a single node in the tree data structure.

class TreeNode {
  // The constructor method of the TreeNode class takes a single
  // argument value and initializes two properties: value,
  // which stores the value of the node, and children,
  // which is an empty array that will store the node's child nodes.
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // The addChild method of the TreeNode class takes
  // a single argument node and adds it to the children
  // array of the current node.
  addChild(node) {
    this.children.push(node);
  }
}
// We define a Tree class, which represents the entire tree data structure.
class Tree {
  // The constructor method of the Tree class initializes a single property:
  // root, which is initially set to null.

  constructor() {
    this.root = null;
  }
  //   The addRoot method of the Tree class takes a
  //    single argument value and creates a new TreeNode object with the specified value.
  //     It then sets this.root to the new TreeNode object,
  //   effectively making it the root node of the tree.

  addRoot(value) {
    this.root = new TreeNode(value);
  }
  // The traverse method of the Tree class takes a single argument node,
  // which defaults to this.root. It first logs the value of the current node
  // to the console using console.log(node.value). It then iterates over the
  //  children array of the current node using
  //  node.children.forEach((child) => this.traverse(child)),
  // recursively calling the traverse method on each child node.
  traverse(node = this.root) {
    console.log(node.value);
    node.children.forEach((child) => this.traverse(child));
  }
}

// Example usage
const tree = new Tree();
tree.addRoot("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
tree.root.addChild(nodeB);
tree.root.addChild(nodeC);
const nodeD = new TreeNode("D");
nodeB.addChild(nodeD);
const nodeE = new TreeNode("E");
nodeC.addChild(nodeE);

tree.traverse(); // prints "A", "B", "D", "C", "E" in depth-first order
