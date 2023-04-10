function quickSort(arr) {
  if (arr.length <= 1) {
    // If the array has only one element...
    return arr; // Return the array (it's already sorted).
  }
  const pivot = arr[0]; // Pick the first element as the pivot.
  const left = []; // Create two empty arrays to hold the smaller and larger elements.
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    // Loop through the array from the second element to the last.
    if (arr[i] < pivot) {
      // If the current element is smaller than the pivot...
      left.push(arr[i]); // Add it to the left array.
    } else {
      // Otherwise (if the current element is larger than or equal to the pivot)...
      right.push(arr[i]); // Add it to the right array.
    }
  }
  return quickSort(left).concat(pivot, quickSort(right)); // Recursively sort the left and right arrays and then concatenate them with the pivot in the middle.
}
