// Heap Sort is an efficient sorting algorithm that uses a binary heap data structure. It is a comparison-based sorting algorithm that works by creating a heap out of the given array and then removing the largest element from the heap until it is empty. The resulting elements are in sorted order.

// Heap Sort works by first organizing the data into a special type of binary tree called a heap. A heap is a complete binary tree that satisfies the heap property, which states that each node in the tree is greater than or equal to its children. Once the data has been organized into a heap, it can be sorted by repeatedly removing the largest element from the top of the heap and adding it to an output list. This process continues until all elements have been removed from the heap and added to the output list, resulting in a sorted list.

// Javascript Code Example:

// Heap Sort Algorithm
function heapSort(arr) {
  // Build max-heap
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapify(arr, arr.length, i);
  }

  // Heap sort
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap current root with last element
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Heapify root element to get highest element at root again
    maxHeapify(arr, i, 0);
  }

  return arr;
}

// To max-heapify subtree rooted at index 'i'
function maxHeapify(arr, n, i) {
  let largest = i; // Initialize largest as root

  let l = 2 * i + 1; // left child = 2*i + 1

  let r = 2 * i + 2; // right child = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If largest is not root
  if (largest != i) {
    let swap = arr[i];

    arr[i] = arr[largest];

    arr[largest] = swap;

    // Recursively heapify affected sub-tree

    maxHeapify(arr, n, largest);
  }
}
const numbers = [
  60, 4, 53, 5, 2, 244, 5, 66, 80, 0, 65, 22, 44, 66, 36, 5563, 23, 45, 34,
];
const sortedNumbers = console.log(heapSort(numbers));
