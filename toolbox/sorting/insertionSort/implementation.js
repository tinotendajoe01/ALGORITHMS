function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Loop through the array from the second element to the last.
    let j = i - 1; // Set a variable to keep track of the previous element.
    let tmp = arr[i]; // Store the current element in a temporary variable.
    while (j >= 0 && arr[j] > tmp) {
      // While the previous element is greater than the current element...
      arr[j + 1] = arr[j]; // Shift the previous element one position to the right.
      j--; // Decrement the previous element's index.
    }
    arr[j + 1] = tmp; // Insert the current element in the correct position.
  }
  return arr; // Return the sorted array.
}
