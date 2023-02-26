// This function is used to find the maximum sum of a contiguous subarray within a given array.
// It uses the Kadane's Algorithm to solve this problem.

// The function takes an array 'arr' as an argument and sets two variables, max and local, to -Infinity and 0 respectively.
// It then iterates through the array using a forEach loop. For each element in the array,
// it sets local equal to the maximum of either that element or the sum of that element and local.
//  Then it sets max equal to the maximum of either max or local. Finally,
//  it returns max which is the maximum sum of a contiguous subarray within the given array.

function maxSubArray(arr) {
  let max = -Infinity; //a number that is less than any other number.

  let local = 0;

  arr.forEach((n) => {
    local = Math.max(n, local + n);
    max = Math.max(max, local);
  });

  return max;
}
let arr = [2, 3, 4, 5, -1];
console.log(maxSubArray(arr));
