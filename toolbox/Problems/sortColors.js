// Sort Colors (The Dutch flag problem)
// so-2) Given an array with three possible values (0, 1, 2), sort them in linear time, and in-place. Hint: similar to quicksort, where the pivot is 1.Examples:

// sortColors([0, 2, 1]); // [0, 1, 2]
// sortColors([2, 0, 2, 1, 0, 1, 0]); // [0, 0, 0, 1, 1, 2, 2]
// sortColors([1, 1, 1]); // [1, 1, 1]
/**This problem is also known as the Dutch national
 * flag problem. The idea is to group all the 0s together
 * , followed by all the 1s, and then all the 2s.
 *  Since there are only three possible values,
 *  we can do this in linear time by swapping elements
 *  in place.*/
function sortColors(nums) {
  let low = 0; // Pointer for 0s.
  let mid = 0; // Pointer for 1s.
  let high = nums.length - 1; // Pointer for 2s.
  while (mid <= high) {
    // Loop through the array.
    if (nums[mid] === 0) {
      // If we encounter a 0...
      swap(nums, low, mid); // Swap it with the current 0 pointer.
      low++; // Move the 0 pointer to the right.
      mid++; // Move the current pointer to the right.
    } else if (nums[mid] === 1) {
      // If we encounter a 1...
      mid++; // We don't need to swap it, just move the current pointer to the right.
    } else {
      // If we encounter a 2...
      swap(nums, mid, high); // Swap it with the current 2 pointer.
      high--; // Move the 2 pointer to the left.
    }
  }
  return nums; // Return the sorted array.
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
/** Here's how this function works:

We start by initializing three pointers: low points to the first index of the array, mid points to the first index of the array, and high points to the last index of the array.

We loop through the array with mid as the current pointer.

If we encounter a 0, we swap it with the element at low and move both low and mid to the right.

If we encounter a 1, we don't need to swap it, so we just move mid to the right.

If we encounter a 2, we swap it with the element at high and move high to the left. We don't move mid in this case, because we need to check the element that we swapped from high again.

After we've looped through the entire array, we've grouped all the 0s together, followed by all the 1s, and then all the 2s, so we can return the sorted array.

So, for example, if we call sortColors([2, 0, 2, 1, 0, 1, 0]), the function will return [0, 0, 0, 1, 1, 2, 2], since all the 0s are grouped together at the beginning, followed by all the 1s, and then all the 2s.
*/
