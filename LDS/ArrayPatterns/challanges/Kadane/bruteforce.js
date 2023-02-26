// This function is used to find the maximum sum of a subarray within an array of numbers.
//  It uses a brute force approach, which means it checks every possible combination of numbers
//  in the array to find the maximum sum. It starts by setting the max variable to negative infinity
//  and then loops through each number in the array (O(n)). For each number, it then loops through all
//  the numbers after that one (O(n^2)) and calculates the sum of all those numbers (O(n)). Finally,
//  it compares that sum to the max variable and sets max to whichever is higher (O(1)).
// tag::maxSubArrayBrute1[]
function maxSubArrayBrute1(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // O(n^3)
    for (let j = i + 1; j <= nums.length; j++) {
      // O(n^2)
      const sum = nums.slice(i, j).reduce((a, n) => n + a, 0); // O(n)
      max = Math.max(max, sum); // O(1)
    }
  }

  return max;
}
// end::maxSubArrayBrute1[]

// This function maxSubArrayBrute2 takes in an array of numbers (nums) and
//  returns the maximum sum of any subarray within the given array. It does this
//  by looping through the array twice, first to set a local variable to 0, and then
//  again to add each element of the array to the local variable and compare it with a
//  max variable. The max variable is set to -Infinity initially, and is updated with the
//   larger of itself or the local variable after each iteration. Finally, the function returns the max value.

// tag::maxSubArrayBrute2[]
function maxSubArrayBrute2(nums) {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    // O(n) * O(n)
    let local = 0;
    for (let j = i; j < nums.length; j++) {
      // O(n)
      local += nums[j];
      max = Math.max(max, local);
    }
  }
  return max;
}
// end::maxSubArrayBrute2[]
