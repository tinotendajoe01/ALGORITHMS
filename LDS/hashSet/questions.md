Practice Questions
Most common word
ST-1) Given a text and a list of banned words. Find the most common word that is not on the banned list. You might need to sanitize the text and strip out punctuation `?!,'.`

Common in interviews at: Amazon.

Examples:

mostCommonWord(
`How much wood, would a Woodchuck chuck,
  if a woodchuck could chuck?`,
['a'],
); // woodchuck or chuck (both show up twice)

mostCommonWord(
`It's a blue ball and its shade... Very BLUE!`,
['and']); // blue (it show up twice, "it" and "its" once)

Longest Without Repeating
ST-2) Find the length of the longest substring without repeating characters.

Common in interviews at: Amazon, Facebook, Bloomberg.

Examples:

lenLongestSubstring('aaaaa'); // 1 ('a')
lenLongestSubstring('abccdefg'); // 5 ('cdefg')
lenLongestSubstring('abc'); // 3 ('abc')
