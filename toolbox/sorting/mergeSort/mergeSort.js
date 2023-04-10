//Merge Sort Algorithm
//Merge sort is a divide and conquer algorithm that splits an array into two halves, recursively sorts each half, and then merges the two sorted halves.

//Step 1: Divide the array in half
//Step 2: Recursively sort each half
//Step 3: Merge the sorted halves

function mergeSort(arr) {
  if (arr.length === 1) {
    //if the array has only one element, it is already sorted
    return arr;
  }

  const middle = Math.floor(arr.length / 2); //find the middle of the array
  const left = arr.slice(0, middle); //divide the array into two halves
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); //recursively sort each half
}

function merge(left, right) {
  //merge both halves together once they are sorted
  let result = [];

  while (left.length && right.length) {
    //while there are elements in both arrays...
    if (left[0] < right[0]) {
      //compare the first elements of each array and push the smaller one to result
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right]; //return the concatenated result of both arrays
}

const numbers = [
  60, 4, 53, 5, 2, 244, 5, 66, 80, 0, 65, 22, 44, 66, 36, 5563, 23, 45, 34,
];
const sortedNumbers = console.log(mergeSort(numbers));
