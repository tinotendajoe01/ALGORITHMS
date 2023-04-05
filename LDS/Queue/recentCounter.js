// QU-1) Design a class that counts the most recent requests within a time window.

// Example:
// Define a Node class to represent each node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a Queue class that implements a linked list to store elements
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new element to the end of the queue
  enqueue(value) {
    // Create a new node with the given value
    const node = new Node(value);
    // If the queue is empty, set both the head and tail to the new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, add the new node to the end of the queue and update the tail pointer
      this.tail.next = node;
      this.tail = node;
    }
    // Increment the size of the queue
    this.size++;
  }

  // Remove and return the first element in the queue
  dequeue() {
    // If the queue is empty, return null
    if (!this.head) {
      return null;
    }
    // Remove the head node and update the head pointer
    const value = this.head.value;
    this.head = this.head.next;
    // Decrement the size of the queue
    this.size--;
    // Return the value of the removed node
    return value;
  }

  // Return the value of the first element in the queue without removing it
  peek() {
    // If the queue is empty, return null
    if (!this.head) {
      return null;
    }
    // Return the value of the head node
    return this.head.value;
  }

  // Return the number of elements in the queue
  get length() {
    return this.size;
  }

  // Return true if the queue is empty, false otherwise
  isEmpty() {
    return this.size === 0;
  }

  // Remove all elements from the queue
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

// Define a RecentCounter class that uses a Queue to count recent requests
class RecentCounter {
  // Initialize the class with a maximum time window and an empty Queue
  constructor(maxWindow = 1000) {
    this.window = maxWindow;
    this.queue = new Queue();
  }

  // Add a new request timestamp to the Queue and remove any timestamps that are outside the time window
  request(timestamp) {
    // Add the timestamp to the end of the Queue
    this.queue.enqueue(timestamp);
    // Remove any timestamps from the front of the Queue that are outside the time window
    while (timestamp - this.queue.peek() > this.window) {
      this.queue.dequeue();
    }
    // Return the number of timestamps remaining in the Queue, which represents the number of requests within the time window
    return this.queue.length;
  }
}

// Export the RecentCounter class for use in other modules
module.exports = { RecentCounter };

/**
 * In this implementation, the Queue class uses a linked list to store its elements. The enqueue(), dequeue(), and peek() methods work in the same way as in the previous implementation. The length property provides the current size of the queue, and the isEmpty() and clear() methods provide information about the state of the queue.

The RecentCounter class uses a Queue object to keep track of the timestamps of incoming requests, and the request() method adds new timestamps to the queue and removes any timestamps that are outside the time window. Finally, the request() method returns the number of timestamps remaining in the queue, which represents the number of requests within the time window.
 */
