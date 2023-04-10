function heapSort(arr) {
  buildMaxHeap(arr); // Build a max heap out of the array.
  for (let i = arr.length - 1; i > 0; i--) {
    // Loop through the array from the last element to the second element.
    swap(arr, 0, i); // Swap the first (largest) element with the current element.
    maxHeapify(arr, 0, i); // Heapify the remaining elements.
  }
  return arr; // Return the sorted array.
}

function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // Loop through the second half of the array backwards.
    maxHeapify(arr, i, n); // Heapify each parent node.
  }
}

function maxHeapify(arr, i, n) {
  const left = 2 * i + 1; // Calculate the indices of the left and right child nodes.
  const right = 2 * i + 2;
  let largest = i; // Set the largest element to the current element.
  if (left < n && arr[left] > arr[largest]) {
    // If the left child is larger than the current element...
    largest = left; // Set the largest element to the left child.
  }
  if (right < n && arr[right] > arr[largest]) {
    // If the right child is larger than the current element or the left child...
    largest = right; // Set the largest element to the right child.
  }
  if (largest !== i) {
    // If the largest element is not the current element...
    swap(arr, i, largest); // Swap the current element with the largest element.
    maxHeapify(arr, largest, n); // Recursively heapify the subtree rooted at the largest element.
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
