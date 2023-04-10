function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n]; // If we've already calculated the n-th Fibonacci number, return it from the memo object.
  }
  if (n <= 1) {
    return n;
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Calculate the n-th Fibonacci number and store it in the memo object.
    return memo[n];
  }
}

/**
 * Here's how this function works:

We start by checking if the n-th Fibonacci number is already in the memo object. If it is, we return it directly without doing any additional calculations.

If the n-th Fibonacci number is not in the memo object, we check if n is less than or equal to 1. If it is, we return n as the base case.

If n is greater than 1 and we haven't already calculated the n-th Fibonacci number, we use the recursive case to calculate it. This involves calling the fibonacci() function recursively with n - 1 and n - 2 as arguments, and storing the result in the memo object.

The next time we need to calculate the same Fibonacci number, we can retrieve it directly from the memo object instead of recalculating it, which saves time.

So, for example, if we call fibonacci(6), the function will return 8, just like the previous implementation. However, note that this optimized implementation has linear time complexity, which means that it's much faster for large values of n than the previous recursive implementation.
 */
