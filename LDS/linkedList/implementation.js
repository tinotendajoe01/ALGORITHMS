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

  // Adds a new node with the specified data to the end of the list
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

  // Adds a new node with the specified data to the beginning of the list
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

  // Inserts a new node with the specified data at the specified index in the list
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

  // Removes the node at the specified index from the list
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

  // Converts the list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result;
  }

  // Converts the list to a string
  toString() {
    return this.toArray().toString();
  }
}
