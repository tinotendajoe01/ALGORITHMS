// tag::description[]
/**
 *ST-2) Given an array of integers from 30 to 100 (daily temperatures), 
 return another array that, for each day in the input,
  tells you how many days you would have to wait until warmer weather. 
 If no warmer climate is possible, then return 0 for that element.
 *
 * @examples
 *  dailyTemperatures([30, 28, 50, 40, 30]); // [2, 1, 0, 0, 0]
 *  dailyTemperatures([73, 69, 72, 76, 73]); // [3, 1, 1, 0, 0]
 *This is a JavaScript function called "dailyTemperatures" that takes an array of temperatures as its input parameter. 
 The purpose of this function is to calculate the number of days you have to wait until a warmer 
 temperature appears. 
 * @param {number[]} t - Daily temperatures
 * @returns {number[]} - Array with count of days to warmer temp.
 */
function dailyTemperatures(t) {
  //The line 37 defines a helper function called "last".
  //   This function takes an array as its input and returns the last element of that array.
  // The  line 38 creates an empty array called "stack".
  //  This array will be used to keep track of the indices of temperatures
  //  that have not yet found a warmer temperature.
  // The  line 39 creates another empty array called "ans".
  // This array will store the number of days you have to wait until a warmer temperature appears
  // for each temperature in the input array.

  // The next part is a for loop that iterates through each temperature in reverse order (from the end of the input array to the beginning).

  // Inside this loop, there is another loop (a while loop) that runs as long as there are elements in the stack and the current temperature is greater than or equal to the last element in the stack. If this condition is true, it means that we have found a warmer temperature for one or more temperatures in the stack, so we remove those indices from the stack using pop().

  // After this while loop, we calculate how many days we have to wait until a warmer temperature appears for the current temperature (at index i). If there are still elements in the stack after removing all indices with temperatures lower than or equal to t[i], then we know that t[stack[stack.length - 1]] is warmer than t[i]. We subtract i from this index to get how many days we have to wait until it gets warmer.

  // Finally, we add i (the current index) to the stack since it hasn't found any warmer temperatures yet.

  // After iterating through all temperatures in reverse order, we return ans which contains how many days you have to wait until a warmer temperature appears for each day.

  const last = (arr) => arr[arr.length - 1];
  const stack = [];
  const ans = [];

  for (let i = t.length - 1; i >= 0; i--) {
    while (stack.length && t[i] >= t[last(stack)]) stack.pop();
    ans[i] = stack.length ? last(stack) - i : 0;
    stack.push(i);
  }

  return ans;
}
// end::solution[]

// this function is called "dailyTemperaturesBrute1" and it takes an array of temperatures as input, which is represented by the variable "t". The function creates an empty array called "ans" to store the results.

// The first loop in the function iterates through each temperature in the input array "t". For each temperature, it sets the corresponding element in the "ans" array to 0.

// The second loop starts from the next temperature after the current one and iterates through all remaining temperatures in the input array. For each of these temperatures, it checks if it is greater than the current temperature. If it is, then it calculates the difference between their indices (j - i) and stores this value in the corresponding element of the "ans" array. It then breaks out of this inner loop and moves on to the next temperature in the outer loop.

// If no temperature is found that is greater than the current temperature, then its corresponding element in "ans" remains 0.

// Finally, once both loops have completed iterating through all temperatures in "t", the function returns the resulting "ans" array which contains either 0 or a positive integer representing how many days until a warmer temperature occurs.

function dailyTemperaturesBrute1(t) {
  const ans = [];

  for (let i = 0; i < t.length; i++) {
    ans[i] = 0;
    for (let j = i + 1; j < t.length; j++) {
      if (t[j] > t[i]) {
        ans[i] = j - i;
        break;
      }
    }
  }

  return ans;
}
