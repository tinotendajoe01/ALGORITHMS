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
