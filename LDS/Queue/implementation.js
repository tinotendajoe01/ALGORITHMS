// Using an array:
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an item to the end of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Remove and return the first item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Return the first item in the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of items in the queue
  size() {
    return this.items.length;
  }

  // Clear all items from the queue
  clear() {
    this.items = [];
  }
}
// In this implementation, the Queue class uses an array to store the items in the queue. The enqueue() method adds new items to the end of the array, while the dequeue() method removes the first item from the front of the array. The peek() method returns the first item without removing it, and the isEmpty() and size() methods provide information about the current state of the queue.

// Using a linked list:
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an item to the end of the queue
  enqueue(item) {
    const newNode = new Node(item);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove and return the first item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.head.data;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return item;
  }

  // Return the first item in the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of items in the queue
  size() {
    return this.length;
  }

  // Clear all items from the queue
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
// In this implementation, the Queue class uses a linked list to store the items in the queue. The enqueue() method adds new items to the end of the list by creating a new Node object and updating the tail pointer. The dequeue() method removes the first item from the front of the list by updating the head pointer and returning the data from the original head node. The peek(), isEmpty(), size(), and clear() methods work in the same way as in the array-based implementation.
