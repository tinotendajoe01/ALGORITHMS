// AR-A) Given a sorted array of integers, find two numbers that add up to a target and return their values.
/**
 * Find two numbers that add up target.
 * @param arr - The array of integers
 * @param target - The target
 * @returns {number[]} - array with the values that add up to target.
 */
function twoSum(arr, target) {
  // give it a try on your own ...
}

// twoSum([ -5, -3, 1, 10 ], 7); // [-3, 10] // (10 - 3 = 7)
// twoSum([ -5, -3, -1, 1, 2 ], 30); // [] // no 2 numbers add up to 30
// twoSum([ -3, -2, -1, 1, 1,  3,  4], -4); // [-3, -1] // (-3 -1 = -4)

// Solution 1: Brute force use two pointers in a nested loop
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
  return [];
}

// The runtime of this solution would be O(n^2). Because of the nested loops. Can we do better?
//  We are not using the fact that the array is SORTED!
// We can use two pointers: one pointer starting from the left side and the other from the right side.

// Depending on whether the sum is bigger or smaller than the target, we move right or left. If the sum is equal to the target, we return the current left and right pointer’s values.

// Solution 2: Two Pointers (for sorted arrays)
function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum > target) right--;
    else left++;
  }
  return [];
}
// These two pointers have a runtime of O(n).
