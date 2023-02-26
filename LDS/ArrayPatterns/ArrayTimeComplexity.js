// Reading elements from an array and string

const array = [2, 5, 1, 9, 6, 7];
const string = "hello";
console.log(array[2]); // 1
console.log(string[1]); // "e"

// You can update arrays in the same way, using the [] operator.
//  However, you can’t modify strings. They are immutable!

const array2 = [2, 5, 1, 9, 6, 7];
const string2 = "hello";
array[2] = 117;
console.log(array2[2]); // 117
string2[1] = "z"; // doesn't change the string.
console.log(string2[1]); // "e"

// Inserting at the beginning of the array
// JavaScript built-in array.unshift
// The unshift() method adds one or more elements to the beginning
//  of an array and returns its new length.
// Runtime: O(n).

const array = [2, 5, 1];
array.unshift(0); // ↪️ 4
console.log(array); // [ 0, 2, 5, 1 ]
array.unshift(-2, -1); // ↪️ 6
console.log(array); // [ -2, -1, 0, 2, 5, 1 ]

// Inserting a new element in the middle involves moving part of the
//  array but not all of the items.
// We can use splice for that
const array = [2, 5, 1, 9, 6, 7];
array.splice(1, 0, 111); // ↪️ [] (1) at position 1, delete 0 elements and insert 111.
// array: [2, 111, 5, 1, 9, 6, 7]

// JavaScript built-in array.splice
// The splice() method changes an array’s contents by removing existing elements or adding new items. Splice returns an array containing the deleted items.

// Runtime: O(n).

// Inserting at the end of the array
// For inserting items at the end of the array, we can use: push.
const array = [2, 5, 1, 9, 6, 7];
array.push(4); // ↪️ 7 (1)
// array: [2, 5, 1, 9, 6, 7, 4]
// The 4 element would be pushed to the end of the array.
//  Notice that push returns the new length of the array.
// JavaScript built-in array.push
// The push() method adds one or more elements to the end of an array and returns its new length.
// Runtime: O(1).

// Searching by value and index
// As we saw before, searching by the index is very easy using the [] operator:

// Search by index
const array = [2, 5, 1, 9, 6, 7];
array[4]; // ↪️ 6
// Searching by index takes constant time - O(1) - to retrieve values out of the array.

// Searching by value can be done using indexOf.

// If the value is there, we will get the index, otherwise -1.

// Search by value
const array = [2, 5, 1, 9, 6, 7];
console.log(array.indexOf(9)); // ↪️ 3
console.log(array.indexOf(90)); // ↪️ -1
// Internally, indexOf has to loop through the whole array (worst case) or until we find the first occurrence.
// Time complexity is O(n).

// Deleting element from the beginning
// Deleting from the beginning can be done using the splice function and the shift. For simplicity, we will use the latter.

const array = [2, 111, 5, 1, 9, 6, 7];
// Deleting from the beginning of the array.
array.shift(); // ↪️ 2
array.shift(); // ↪️ 111
console.log(array); // [5, 1, 9, 6, 7]
array.splice(0, 1); // ↪️ [ 5 ]
console.log(array); // [ 1, 9, 6, 7 ]
// As expected, this will change every index on the array,
// so this takes linear time: O(n).

// JavaScript built-in array.shift
// The shift() method shift all elements to the left. In turn,
//  it removes the first element from an array and returns that removed element.
//   This method changes the length of the array.

// Runtime: O(n).

// Deleting element from the middle
// We can use the splice method for deleting an item from the middle of an array.

// You can delete multiple items at once:

// Deleting from the middle
const array = [0, 1, 2, 3, 4];
// Deleting from the middle
array.splice(2, 3); // ↪️ [ 2, 3, 4 ] (1)
console.log(array); // [0, 1]
// delete 3 elements starting on position 2

// Deleting from the middle might cause most of the array elements to move up one
// position to fill in for the eliminated item. Thus, runtime: O(n).

// Deleting element from the end
// Removing the last element is very straightforward using pop:

// Deleting last element from the array
const array = [2, 5, 1, 9, 111];
array.pop(); // ↪️111
// array: [2, 5, 1, 9]
// While deleting the last element, no other item was touched, so that’s an O(1) runtime.

// JavaScript built-in array.pop
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

// Runtime: O(1).
