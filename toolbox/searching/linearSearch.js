// Linear search is a simple search algorithm that searches an array sequentially, starting from the first element and moving through each element until the desired item is found or the end of the array is reached.

// Here is an example of linear search in JavaScript:

// Linear Search Algorithm
function linearSearch(arr, target) {
  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // If the element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }

  // If no match is found, return -1
  return -1;
}
const numbers = [
  60, 4, 53, 5, 2, 244, 5, 66, 80, 0, 65, 22, 44, 66, 36, 5563, 23, 45, 34,
];
let target = 66;
const targetIndex = console.log(linearSearch(numbers, target));
