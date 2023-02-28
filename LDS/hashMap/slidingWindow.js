/**
 * Return the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
function longestSubstring(s) {
  /*
    This function is used to find the longest substring of a given string without repeating characters. 

Step by step: 
1. The function takes a string as an argument. 
2. A variable max is initialized to 0, which will be used to store the length of the longest substring found. 
3. A loop is created that starts at the first character of the string and iterates until it reaches the end of the string. This loop will be used to check each substring in the given string for uniqueness. 
4. Inside this loop, another loop is created that starts at the same character as the outer loop and iterates until it reaches the end of the string as well. This inner loop will be used to check each character in a substring for uniqueness within that substring. 
5. Inside this inner loop, yet another loop is created that starts at one character before the current character and iterates until it reaches the current character in order to check if any characters are repeated within that range (the range being between one character before and one character after). 
6. If any characters are repeated within this range, then we break out of both loops and move on to checking another substring in our outer loop (step 3). 
7. If all characters are unique within this range, then we calculate its length by subtracting its starting index from its ending index plus 1 (since indices start from 0) and compare it with our max variable which stores our longest length so far (initialized at 0). If our calculated length is greater than our max variable, then we update our max variable with this new length value. 
8. After all substrings have been checked for uniqueness, we return our max variable which contains our longest length found so far (or 0 if no substrings were found).
 */
  let max = 0;

  for (let lo = 0; lo < s.length; lo++) {
    repeatedFound: for (let hi = lo; hi < s.length; hi++) {
      // check if it's unique withing [lo,hi] range
      for (let i = lo; i < hi; i++) {
        for (let j = lo + 1; j <= hi; j++) {
          if (i !== j && s[i] === s[j]) break repeatedFound;
        }
      }
      // all are unique between [lo,hi] range
      max = Math.max(max, hi - lo + 1);
    }
  }

  return max;
}
