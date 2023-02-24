// Quick Sort Algorithm with JavaScript

// Define a function that takes an array as an argument
function quickSort(arr) {
  // If the array has one or fewer elements, return the array
  if (arr.length <= 1) {
    return arr;
  }

  // Select the last element of the array as the pivot element
  let pivot = arr[arr.length - 1];

  // Create two empty arrays to store elements less than and greater than the pivot element
  let left = [];
  let right = [];

  // Loop through each element in the array and compare it to the pivot element. If it is less than, add it to the left array. If it is greater than, add it to the right array.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively call quickSort on both arrays until they are sorted and then concatenate them together with the pivot element in between them. Return this sorted array.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [
  60, 4, 53, 5, 2, 244, 5, 66, 80, 0, 65, 22, 44, 66, 36, 5563, 23, 45, 34,
];
const sortedNumbers = console.log(quickSort(numbers));
