// Given an array of intervals [start, end], merge all overlapping intervals.
// Examples:

// merge([[0, 2], [2, 4]]); // [[0, 4]] (0-2 overlaps with 2-4)
// merge([[2, 2], [3, 4]]); // [[2, 2], [3, 4]] (no overlap)
// merge([[1, 10], [3, 4]]); // [[1, 10]] (1-10 covers the other)

// To solve this problem, we need to iterate over the intervals and compare each interval with the next interval. If the intervals overlap, we merge them into a single interval. If not, we add the current interval to the result and continue iterating.

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals by their start times.
  const result = [intervals[0]]; // Initialize the result array with the first interval.
  for (let i = 1; i < intervals.length; i++) {
    // Loop through the intervals.
    const current = intervals[i]; // Get the current interval.
    const last = result[result.length - 1]; // Get the last interval in the result array.
    if (current[0] <= last[1]) {
      // If the current interval overlaps with the last interval in the result array...
      last[1] = Math.max(current[1], last[1]); // Merge the intervals by taking the maximum end time.
    } else {
      // Otherwise (if there is no overlap)...
      result.push(current); // Add the current interval to the result array.
    }
  }
  return result; // Return the merged intervals.
}

/**Here's how this function works:

We start by sorting the intervals by their start times, so that we can compare adjacent intervals easily.

We initialize the result array with the first interval, since there's no way for it to overlap with any other interval.

We loop through the remaining intervals, comparing each one with the last interval in the result array.

If the current interval overlaps with the last interval in the result array, we merge the two intervals by updating the end time of the last interval to be the maximum of the two end times.

If there's no overlap between the current interval and the last interval in the result array, we add the current interval to the result array.

After iterating over all the intervals, we return the merged intervals in the result array.

So, for example, if we call merge([[0, 2], [2, 4]]), the function will return [[0, 4]], since the intervals [0, 2] and [2, 4] overlap and can be merged into a single interval [0, 4]. */
