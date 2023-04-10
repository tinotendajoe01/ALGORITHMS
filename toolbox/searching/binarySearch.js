// Binary search is a search algorithm that finds the position of a target value within a sorted array.

// Example:

// Binary Search Algorithm

function binarySearch(arr, target) {
  // Set start and end boundaries for searching
  let start = 0;
  let end = arr.length - 1;
  // Loop until end boundary crosses start boundary
  while (start <= end) {
    // Calculate middle index
    let mid = Math.floor((start + end) / 2);
    // If element at middle index matches target, return its index
    if (arr[mid] === target) {
      return mid;
      // If element at middle index is less than target, set left boundary to one index higher than middle index
    } else if (arr[mid] < target) {
      start = mid + 1;
      // Otherwise set right boundary to one index lower than middle index
    } else {
      end = mid - 1;
    }
  }

  // If no match is found,
  return -1; // Target not found in array.
}

const numbers = [1, 2, 3, 4, 5, 6];
let target = 6;
const targetIndex = console.log(binarySearch(numbers, target));
