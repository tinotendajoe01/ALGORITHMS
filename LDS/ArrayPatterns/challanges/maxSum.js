// Max of adding
// Given an array of integers, find the maximum sum of adding the highest number in the array

/**
 * Find  numbers that add up to a max num.
 * @param arr - The array of integers
 * @returns maxSum
 */

function maxTotal(arr) {
  let maxSum; //init maxsum to 0
  let start = 0; // init start index to 0
  let end = 0; //init end index to 0

  for (let i = 0; i < arr.length; i++) {
    //loop through each index of the arr

    let tempSum = arr[start] + arr[end]; //add all elements with current window

    if (maxSum === undefined || tempSum > maxSum) {
      maxSum = tempSum;
    }
    //move window one element over
    start++;
    end++;
  }
  return maxSum;
}
const arr = [0, -1, 6, 3, 100, 9];

console.log(maxTotal(arr));
