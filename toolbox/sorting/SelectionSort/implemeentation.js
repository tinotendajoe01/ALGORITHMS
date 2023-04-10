function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Loop through the array from the first element to the second-to-last.
    let minIndex = i; // Set the minimum index to the current index.
    for (let j = i + 1; j < arr.length; j++) {
      // Loop through the array from the next element to the last.
      if (arr[j] < arr[minIndex]) {
        // If the current element is smaller than the minimum element...
        minIndex = j; // Set the minimum index to the current index.
      }
    }
    let tmp = arr[i]; // Store the current element in a temporary variable.
    arr[i] = arr[minIndex]; // Replace the current element with the minimum element.
    arr[minIndex] = tmp; // Replace the minimum element with the temporary variable (the original current element).
  }
  return arr; // Return the sorted array.
}
