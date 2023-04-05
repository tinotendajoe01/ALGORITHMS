// So, imagine you have a bunch of toys that you want to keep track of. You could put them all in a big box, but it might be hard to find the one you want when you need it. Instead, you could line them up one after the other and remember which toy comes next in line.

// In JavaScript, we can create a linked list by making an object that has two properties: one for the data we want to store (like the name of a toy), and another for the next link in the chain. We can keep adding new links to the chain by creating more objects with these two properties.

// So if we had three toys named "Teddy Bear", "Barbie", and "Lego Set", we could create three objects like this:

````
let teddyBear = { data: "Teddy Bear", next: null };
let barbie = { data: "Barbie", next: null };
let legoSet = { data: "Lego Set", next: null };
``` // Then we could link them together like this:
````

teddyBear.next = barbie;
barbie.next = legoSet;

```;
// Now we have a linked list with three toys! We can access any toy by starting at the first link (teddyBear) and following the `next` property until we get to the one we want.

/**
 * A list (or Linked List) is a lineaA linked list is a data structure used to represent a sequence of elements, where each element (node) points to the next element in the sequence. In JavaScript, a linked list can be implemented using objects and references.

Here's an example of a simple linked list implementation in JavaScript:

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = currentNode.next;
    if (previousNode.next === null) {
      this.tail = previousNode;
    }
    this.length--;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result;
  }

  toString() {
    return this.toArray().toString();
  }
}
In this implementation, the Node class represents a single node in the linked list, containing a data property for the node's value and a next property for the reference to the next node in the sequence.

The LinkedList class represents the linked list itself, containing a head property for the reference to the first node in the sequence, a tail property for the reference to the last node in the sequence, and a length property for the number of nodes in the sequence. The class also contains methods for appending, prepending, inserting, and removing nodes from the list, as well as converting the list to an array or string for display or manipulation.

Overall, a linked list can be a useful data structure for representing sequences of elements that may need to be dynamically added or removed during program execution.r data structure where each object has a pointer to the next one creating a chain. You can also have a back reference to the previous node.
 */

// Finding an item on the linked list takes O(n) time.
// Because in the worst-case, you will have to iterate over the whole list.

// Types of Linked List
// Linked Lists can be:
// Singly: every item has a pointer to the next.

// Doubly: every item has a reference to the next and the previous.

// Circular: the last element points to the first one, forming an infinite loop.

// JavaScript doesn’t have a built-in List. However, it’s straightforward to create.
```
