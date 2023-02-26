// Kadane's Algorithm is an algorithm used to find the maximum subarray sum in an
// array of numbers. It is a dynamic programming algorithm that runs in linear time,
// making it an efficient way to solve the maximum subarray problem.

// Kadane's Algorithm
function maxSubArraySum(arr) {
  let max_so_far = arr[0];
  let curr_max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr_max = Math.max(arr[i], curr_max + arr[i]);

    max_so_far = Math.max(max_so_far, curr_max);
  }

  return max_so_far;
}

let arr = [2, 3, 4, 5, -1];

console.log(maxSubArraySum(arr));
