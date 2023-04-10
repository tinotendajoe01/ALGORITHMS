function mergeSort(arr) {
  if (arr.length <= 1) {
    // If the array has only one element...
    return arr; // Return the array (it's already sorted).
  }
  const mid = Math.floor(arr.length / 2); // Find the middle index of the array.
  const left = arr.slice(0, mid); // Divide the array into two halves.
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right)); // Sort each half separately using merge sort and then merge them back together.
}

function merge(left, right) {
  let result = []; // Create a new array to hold the merged elements.
  let i = 0; // Set variables to keep track of the indices of the left and right arrays.
  let j = 0;
  while (i < left.length && j < right.length) {
    // While there are still elements in both arrays...
    if (left[i] < right[j]) {
      // If the current element in the left array is smaller than the current element in the right array...
      result.push(left[i]); // Add the current element in the left array to the result array.
      i++; // Increment the index of the left array.
    } else {
      // Otherwise (if the current element in the right array is smaller than or equal to the current element in the left array)...
      result.push(right[j]); // Add the current element in the right array to the result array.
      j++; // Increment the index of the right array.
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j)); // Add any remaining elements from the left or right array to the result array (if there are any).
}
