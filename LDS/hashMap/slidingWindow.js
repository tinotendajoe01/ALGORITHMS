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
  let max = 0; //2

  for (let lo = 0; lo < s.length; lo++) {
    //3
    repeatedFound: for (let hi = lo; hi < s.length; hi++) {
      //4
      // check if it's unique withing [lo,hi] range
      for (let i = lo; i < hi; i++) {
        //5
        for (let j = lo + 1; j <= hi; j++) {
          if (i !== j && s[i] === s[j]) break repeatedFound; //6
        }
      }
      // all are unique between [lo,hi] range
      max = Math.max(max, hi - lo + 1); //7
    }
  }

  return max;
}

/**
 * Return the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
function longestSubstring(s) {
  /*
    This function is used to find the longest substring in a given string. It does this by looping through each character of the string and checking if it is unique within a certain range. 

Step by step: 
1. Declare a variable called max and set it to 0. This will be used to store the length of the longest substring found. 
2. Create an outer loop that starts at index 0 and loops until it reaches the end of the string (s.length). This will be used to check each character in the string one by one. 
3. Create an inner loop that starts at index lo (the current index of the outer loop) and loops until it reaches the end of the string (s.length). This will be used to check if each character is unique within a certain range (from lo to hi). 
4. Create a map object which will store each character as a key and its value as true if it is unique within the range (lo, hi). 
5. Inside the inner loop, check if each character is already present in the map object or not using .has() method, if yes then break out of this inner loop using label repeatedFound; otherwise add this character in map object with its value as true using .set() method. 
6. After completing inner loop, calculate max length substring found so far by subtracting lo from hi and adding 1 to it, then compare this with max variable and update max variable accordingly using Math.max(). 
7. After completing outer loop return max variable which contains length of longest substring found in given string s
 */
  let max = 0;

  for (let lo = 0; lo < s.length; lo++) {
    repeatedFound: for (let hi = lo; hi < s.length; hi++) {
      // check if it's unique withing [lo,hi] range
      const map = new Map();
      for (let i = lo; i <= hi; i++) {
        if (map.has(s[i])) break repeatedFound;
        map.set(s[i], true);
      }
      // all are unique between [lo,hi] range
      max = Math.max(max, hi - lo + 1);
    }
  }

  return max;
}

/**
 * Return the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
function longestSubstring(s) {
  /**
     * 1. The function longestSubstring(s) takes in a string s as an argument.
2. It creates a new Map object called map.
3. It declares a variable max and sets it equal to 0.
4. It uses a for loop to iterate through the characters of the string s, starting at index 0 and ending at the last index of the string s. 
5. Inside the for loop, it checks if the character at index hi is present in the map object using the has() method. 
6. If it is present, then it sets lo (low) equal to the maximum of either lo or map's get() method plus 1 (map.get(s[hi]) + 1). 
7. It then sets that character in the map object using set() method and passing in hi as an argument (map.set(s[hi], hi)). 
8. It then sets max equal to the maximum of either max or hi minus lo plus 1 (max = Math.max(max, hi - lo + 1)). 
9. After exiting out of the for loop, it returns max as its output value from this function call longestSubstring(s).

     */
  const map = new Map();
  let max = 0;

  for (let hi = 0, lo = 0; hi < s.length; hi++) {
    if (map.has(s[hi])) lo = Math.max(lo, map.get(s[hi]) + 1);
    map.set(s[hi], hi);
    max = Math.max(max, hi - lo + 1);
  }

  return max;
}
