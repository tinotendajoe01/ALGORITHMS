// tag::description[]
/**
 * Find the most common word that is not banned.
 * @example mostCommonWord("It's blue and it's round", ['and']) // it
 * @param {string} paragraph - The text to sanitize and search on.
 * @param {string[]} banned - List of banned words (lowercase)
 * @returns {string} - The first word that is the most repeated.
 */
function mostCommonWord(paragraph, banned) {
  /**
  * This function takes in two parameters: a paragraph and a list of banned words.
  * The purpose of the function is to find the most common word in the paragraph that
  *  is not in the list of banned words. 
  * Step by Step: 
1. Convert the paragraph to lowercase and replace any non-word characters with spaces. 
2. Split the paragraph into individual words. 
3. Create a set of banned words from the list of banned words passed in as an argument. 
4. Use reduce() to create a map of each word and its frequency in the paragraph, excluding any words that are in the set of banned words created earlier. 
5. Find the maximum frequency among all words using Math.max(). 
6. Iterate through each word and its frequency in the map created earlier and return the word with maximum frequency if it matches with max found earlier, otherwise return an empty string if no such word exists.


  */

  const words = paragraph.toLowerCase().replace(/\W+/g, " ").split(/\s+/); //1. and 2.
  const b = new Set(banned); //3.
  const map = words.reduce(
    (m, w) => (b.has(w) ? m : m.set(w, 1 + (m.get(w) || 0))),
    new Map()
  );
  const max = Math.max(...map.values());
  for (const [w, c] of map.entries()) if (c === max) return w;
  return "";
  // end::solution[]
  // tag::description[]
}
// end::description[]

// tag::explicit[]
function mostCommonWordExplicit(paragraph, banned) {
  /**
     * This function is used to find the most common word in a given paragraph that is not in a list of banned words.

Step 1: The first step is to convert the paragraph into lowercase and replace any non-word characters with a space. This is done using the .toLowerCase() and .replace() methods. 

Step 2: The next step is to create a Set object from the list of banned words. This will make it easier to check if a word should be excluded from the count. 

Step 3: The third step is to use the .reduce() method to count how many times each word appears in the paragraph. We use a Map object to store each word and its count. If the word is in the banned list, we skip it and move on to the next one. 

Step 4: The fourth step is to find the maximum value of all words counts using Math.max(). This will give us the most common word's count. 

Step 5: The fifth step is to loop through all words counts using .entries() and check if it matches with max value found in Step 4. If so, we return that word as it's most common one in paragraph which isn't in banned list. 

Step 6: Finally, if no match was found, we return an empty string as there was no most common word which wasn't in banned list.

     */
  const words = paragraph.toLowerCase().replace(/\W+/g, " ").split(/\s+/); //1.
  const exclude = new Set(banned); //2.

  const wordsCount = words.reduce((map, word) => {
    //3.
    if (exclude.has(word)) return map;
    const count = map.get(word) || 0;
    return map.set(word, 1 + count);
  }, new Map());

  const max = Math.max(...wordsCount.values()); //4

  for (const [word, count] of wordsCount.entries()) {
    //5
    if (count === max) {
      return word;
    }
  }
  return "";
}
// end::explicit[]

const paragraph =
  "Hello jason, today i am working on could'nt a few things that are important Before i go";
const banned = ["today", "few", "go"];
const words = paragraph.toLowerCase().replace(/\W+/g, " ").split(/\s+/); //1.
const exclude = new Set(banned); //2.
console.log(paragraph);
console.log(words);
console.log(exclude);
