// Max Subarray
// AR-1) Given an array of integers, find the maximum sum of
// consecutive elements (subarray).

// Examples:

// maxSubArray([1, -3, 10, -5]); // 10 (taking only 10)
// maxSubArray([-3, 4,-1, 2, 1, -5]); // 6 (sum [4,-1, 2, 1])
// maxSubArray([-2, 1, -3, 4, -1, 3, 1]); // 7 (sum [4,-1, 3, 1])

/**
 * Find  numbers that add up to a max num.
 * @param arr - The array of integers
 * @returns {subarr[]} - subarray with the values that add up to max tot
 */

function maxSubArry(arr) {
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
const arr = [2, 4, 6, 8, 10];

console.log(maxSubArry(arr));
max;
