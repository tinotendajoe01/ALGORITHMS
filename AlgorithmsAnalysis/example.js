// here are two simple JavaScript functions that demonstrate different time and space complexities:

// A linear search function that searches for a value in an array:

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// The time complexity of this function is O(n), where n is the size of the array. This is because in the worst case scenario, the function may have to iterate through the entire array to find the value it's looking for.

// The space complexity of this function is O(1), because it only uses a fixed amount of memory to store the input array and the value it's searching for.

// A bubble sort function that sorts an array in ascending order:
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// The time complexity of this function is O(n^2), where n is the size of the array. This is because the function uses nested loops to compare and swap adjacent elements in the array until it's sorted. In the worst case scenario, the function may have to make n^2 comparisons and swaps to fully sort the array.

// The space complexity of this function is O(1), because it only uses a fixed amount of memory to store the input array and temporary variables for swapping elements.

// I hope these examples help illustrate the concepts of time and space complexity in JavaScript functions!
