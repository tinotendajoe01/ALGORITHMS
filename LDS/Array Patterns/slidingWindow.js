// The sliding window pattern is similar to the two pointers.
// The difference is that the distance between the left and right pointer is always the same.
// Also, the numbers don’t need to be sorted

// AR-B) Find the max sum of an array of integers, only taking k items from the right and left side sequentially.
//  Constraints: k won’t exceed the number of elements in the array: 1 ⇐ k ⇐ n.

/**
 * Find the max sum of an array of integers,
 * only taking `k` items from the right and left side.
 *
 * @param {number[]} arr - The array of integers
 * @param {number} k - The number of elements to sum up.
 * @returns {number}
 */
function maxSum(arr, k) {
  // Give it a try
}

// maxSum([1,2,3], 3); // 6 // (1 + 2 + 3 = 6)
// maxSum([1,1,1,1,200,1], 3); // 202 // (1 + 200 + 1 = 202)
// maxSum([3, 10, 12, 4, 7, 2, 100, 1], 3); // 104 // (3 + 1 + 100 = 104)
// maxSum([1,200,1], 1); // 6 // (1 + 2 + 3 = 6)

// Solution: using sliding window pointers
function maxSum(arr, k) {
  let left = k - 1;
  let right = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;

  for (let i = 0; i < k; i++) {
    sum += arr[right--] - arr[left--];
    max = Math.max(max, sum);
  }

  return max;
}

// The difference between the two pointers pattern and the sliding windows,
// it’s that we move both pointers at the same time to keep the length of the window the same.

// The runtime for this code is: k.
// As we move the window k times. Since k ⇐ n, the final runtime is O(n).
