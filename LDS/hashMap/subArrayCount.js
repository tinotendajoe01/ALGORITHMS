// Subarray Sum that Equals K
// HM-2) Given an array of integers, find all the possible subarrays to add up to k. Return the count.

// Common in interviews at: FAANG

// Examples:

// subarraySum([1], 1); // 1 (1 equals to 1 :)
// subarraySum([1, 1, 1], 1); // 3 ([1], [1], [1] equals 1)
// subarraySum([1, -1, 1], 0); // 2 (sum([1, -1]), sum([-1, 1]) equals 0)
// subaraySum([1, 2, 3, 0, 1, 4, 0, 5], 5) // 8
// // All of these 8 sub arrays add up to 5:
// // [2, 30], [2,3,0], [0,1,4], [0,1,4,0], [1,4], [1,4,0], [0,5], [5]

// tag::description[]
/**
 * Find the number of subarrays that add up to k.
 * @example subarraySum([1, -1, 1], 0); // 3 ([1,-1,1], [1], [1])
 * @param {number[]} nums - Array of integers.
 * @param {number} k - The target sum.
 * @returns {number} - The number of solutions.
 */
function subarraySum(nums, k) {
  /**
  * This function takes in an array of numbers called `nums` and a target sum called `k`. It then returns the number of contiguous subarrays within `nums` that add up to `k`.

Here's how the function works:

1. It initializes two variables: `ans` and `sum`. 
   - `ans` keeps track of the number of contiguous subarrays that add up to `k`.
   - `sum` keeps track of the running sum as we iterate through the array.

2. It creates a new Map object called `map`, with an initial key-value pair of `[0, 1]`. 
   - The key represents the running sum at a particular index in the array.
   - The value represents the number of times that running sum has been encountered so far.

3. It then loops through each element in the input array using a for loop.
   - At each iteration, it adds the current element to the running sum (`sum += nums[i]`).

4. It checks if there is a key in the map that corresponds to a running sum equal to `(sum - k)`.
   - If there is, it means we have found a contiguous subarray that adds up to `k`.
   - We increment our answer variable by adding the value associated with this key in our map (`ans += map.get(sum - k)`).

5. We then update our map with our new running sum:
   - If there is already an entry for this running sum in our map, we increment its value by 1 (`map.set(sum, 1 + (map.get(sum) || 0))`).
   - If there is no entry for this running sum yet, we create one with an initial value of 1.

6. After iterating through all elements in our input array, we return our answer variable (`return ans`).

  */
  let ans = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) ans += map.get(sum - k);
    map.set(sum, 1 + (map.get(sum) || 0));
  }

  return ans;
}

function subarraySumBrute1(nums, k) {
  /**
     * This function takes in an array of numbers called `nums` and a target sum called `k`. It then returns the number of contiguous subarrays within `nums` that add up to `k`.

Here's how the function works:

1. First, we initialize a variable called `ans` to 0. This variable will keep track of the number of subarrays that add up to `k`.
2. Next, we start a loop that goes through each index of the `nums` array. We use a variable called `i` to keep track of our current index.
3. Within this loop, we start another loop that goes through each index from our current index (`i`) to the end of the array. We use a variable called `j` to keep track of this second index.
4. Within this second loop, we initialize a variable called `sum` to 0. This variable will keep track of the sum of all elements in our current subarray.
5. We then start a third loop that goes through each element in our current subarray (from index `i` to index `j`). We use a variable called `n` to keep track of this third index.
6. Within this third loop, we add each element in our current subarray to our running total (`sum`).
7. After we've finished adding up all elements in our current subarray, we check if the sum is equal to our target sum (`k`). If it is, we increment our answer (`ans`) by 1.
8. We continue with steps 4-7 for every possible contiguous subarray within the original array.
9. Finally, once all possible contiguous subarrays have been checked, we return the final value of `ans`.

     */
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let n = i; n <= j; n++) {
        sum += nums[n];
      }
      if (sum === k) ans++;
    }
  }

  return ans;
}

function subarraySumBrute2(nums, k) {
  /**
     * This function takes in an array of numbers called `nums` and a target sum called `k`. It then calculates how many subarrays within `nums` add up to the target sum `k`.

Here's how it works:

1. The function initializes a variable called `ans` to 0. This variable will keep track of how many subarrays add up to the target sum.

2. The function then starts a loop that goes through each index of the input array `nums`. This loop is controlled by the variable `i`.

3. Inside this loop, the function initializes another variable called `sum` to 0. This variable will keep track of the running total of each subarray as we iterate through them.

4. The function then starts another loop inside the first one that goes through each index of the input array starting from index i. This loop is controlled by the variable `j`.

5. Inside this inner loop, we add each number in the subarray to our running total by adding it to the variable `sum`.

6. We then check if our running total equals our target sum by comparing it with k using an if statement.

7. If our running total equals our target sum, we increment our answer counter variable `ans` by 1.

8. We continue iterating through all possible subarrays until we've gone through all possible combinations.

9. Finally, we return our answer counter variable `ans`, which tells us how many subarrays within nums add up to k.


     */
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) ans++;
    }
  }

  return ans;
}
