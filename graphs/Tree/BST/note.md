A binary search tree (BST) is a type of tree data structure where each node in the tree can have up to two child nodes, which are called the left child and right child. The left child is always less than or equal to the parent node, and the right child is always greater than or equal to the parent node.left child < parent < right child

A BST is called a "search" tree because it allows you to efficiently search for a specific value in the tree. To search for a value in a BST, you start at the root node and compare the value you're looking for to the value of the current node. If the value is less than the current node, you move to the left child of the current node and repeat the process. If the value is greater than the current node, you move to the right child of the current node and repeat the process. You continue this process until you either find the value you're looking for or reach a leaf node (a node with no children).

Inserting a new value into a BST is also efficient. To insert a value, you start at the root node and compare the value you're inserting to the value of the current node. If the value is less than or equal to the current node, you move to the left child of the current node. If the value is greater than or equal to the current node, you move to the right child of the current node. You continue this process until you reach a leaf node, at which point you create a new node with the value you're inserting and add it as a child of the leaf node.

Deleting a value from a BST can be more complicated, but the basic idea is to find the node with the value you want to delete and then rearrange the tree so that it remains a valid BST. This usually involves replacing the deleted node with either its left child or its right child, depending on the structure of the tree.

Overall, binary search trees are a useful data structure for efficiently searching for and inserting values in a sorted collection of data.