// tag::description[]
/**
 * Validate if the parentheses are opened and closed in the right order.
 *
 * Practice Questions
Validate Parentheses / Braces / Brackets
ST-1) Given a string with three types of brackets: (), {}, and []. Validate they are correctly closed and opened.

Examples:


 * @examples
 *  isParenthesesValid('(){}[]'); // true
isParenthesesValid('('); // false (closing parentheses is missing)
isParenthesesValid('([{}])'); // true
isParenthesesValid('[{]}'); // false (brakets are not closed in the right order)
isParenthesesValid('([{)}]'); // false (closing is out of order)
 *
 * @param {string} string - The string
 * @returns {boolean} - True if valid, false otherwise.
 * 
 * The purpose of this function is to determine whether a given string of
 *  parentheses is valid or not. In other words, it checks if the opening and
 *  closing parentheses in the string match up correctly.

 */
function isParenthesesValid(string) {
  // 1. The function takes a string as its input parameter.
  // 2. It creates a new `Map` object called `map`.
  //This map contains key-value pairs where each opening parenthesis is mapped to its corresponding
  //closing parenthesis.
  // 3. It creates an empty array called `stack`.
  // 4. The function then loops through each character in the input string using a `for...of` loop.
  // 5. For each character, it checks if it exists as a key in the `map` object using the `has()` method.
  //If it does, then it pushes the corresponding value onto the `stack` array using the `push()` method.
  // 6. If the character is not an opening parenthesis (i.e., it's a closing parenthesis),
  // then it checks if it matches up with the last item in the `stack` array using the `pop()` method.
  //If they don't match up, then it returns false because this means that there is an invalid pair of parentheses
  //in the string.
  // 7. After looping through all characters in the input string, if there are any remaining items in the
  //`stack` array, then this means that there are some opening parentheses that were not closed properly.
  // In this case, it returns false.
  // 8. If there are no remaining items in the `stack` array, then this means that all opening and closing
  // parentheses matched up correctly and therefore returns true.

  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack = [];

  for (const c of string) {
    if (map.has(c)) stack.push(map.get(c));
    else if (c !== stack.pop()) return false;
  }

  return stack.length === 0;
}
