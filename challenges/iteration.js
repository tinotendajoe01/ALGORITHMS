// Given an array of intervals where intervals[i] = [start-i, end-i],
// merge all overlapping intervals, and return an array of the non-overlapping
//  intervals that cover all the intervals in the input.
/**
 *  first create a class Interval to represent the intervals.
 * then define a function mergeIntervals that will take an array of intervals as input,
 *  merge overlapping intervals, and return an array of non-overlapping intervals.
 *  The main steps of the function are:

Sort the intervals in increasing order of start time.
Iterate through the sorted intervals and compare each interval with the previous one.
If the current interval overlaps with the previous interval, merge them by updating the end time of the previous interval.
If the current interval does not overlap with the previous interval, add it to the output array.
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function mergeIntervals(arr) {
  if (arr.length <= 0) return [];

  arr.sort((i1, i2) => i1.start - i2.start);

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let prev = result[result.length - 1];
    let current = arr[i];

    if (prev.end >= current.start) {
      prev.end = Math.max(prev.end, current.end);
    } else {
      result.push(current);
    }
  }

  return result;
}

let intervals = [
  new Interval(6, 8),
  new Interval(1, 9),
  new Interval(2, 4),
  new Interval(4, 7),
];
console.log(mergeIntervals(intervals));
