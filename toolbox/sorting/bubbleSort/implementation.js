function bubbleSort(arr) {
  let len = arr.length; // Get the length of the input array.
  for (let i = 0; i < len; i++) {
    // Loop through the array from the first element to the last.
    for (let j = 0; j < len - 1; j++) {
      // Loop through the array from the first element to the second-to-last.
      if (arr[j] > arr[j + 1]) {
        // If the current element is greater than the next element...
        let tmp = arr[j]; // Store the current element in a temporary variable.
        arr[j] = arr[j + 1]; // Replace the current element with the next element.
        arr[j + 1] = tmp; // Replace the next element with the temporary variable (the original current element).
      }
    }
  }
  return arr; // Return the sorted array.
}
