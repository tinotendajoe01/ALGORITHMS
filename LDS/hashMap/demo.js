This function takes in two parameters: a paragraph and a list of banned words. The purpose of the function is to find the most common word in the paragraph that is not in the list of banned words. 

Step by Step: 
1. Convert the paragraph to lowercase and replace any non-word characters with spaces. 
2. Split the paragraph into individual words. 
3. Create a set of banned words from the list of banned words passed in as an argument. 
4. Use reduce() to create a map of each word and its frequency in the paragraph, excluding any words that are in the set of banned words created earlier. 
5. Find the maximum frequency among all words using Math.max(). 
6. Iterate through each word and its frequency in the map created earlier and return the word with maximum frequency if it matches with max found earlier, otherwise return an empty string if no such word exists.
