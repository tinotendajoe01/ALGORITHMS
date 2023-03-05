/**
 * Set
Set is a data structure that allows you to store unique values. If you try to add the same value multiple times, the Set will only add it once and ignore all other requests. Also, you can check very quickly if a value exists or not. Searching by value on arrays takes O(n). However, searching by value on a Set takes O(1) on average.

A Set can be implemented in different ways. One way it’s using a Hash Map, and other is using a Tree Map. JavaScript has a built-in Hash Set, so that' the one we are going to focus on.
 */

// Set vs Array
// An array allows you to search a value by index in constant time O(1); however, if you don’t know the index, searching a value would take you linear time O(n). A Set has doesn’t allow you to search value by index, but you can search by value in constant time. The Set.add and Set.has method both are O(1) in average.

// Take a look at the following examples:

// Set usage example (using JavaScript built-in Set)
const set = new Set();
set.add(1); //↪️ Set [ 1 ]
set.add(1); //↪️ Set [ 1 ]
set.add(2); //↪️ Set [ 1, 2 ]
set.add(3); //↪️ Set [ 1, 2, 3 ]
set.has(1); //↪️ true
set.delete(1); //↪️ removes 1 from the set
set.has(1); //↪️ false, 1 has been removed
set.size; //↪️ 2, we just removed one value
console.log(set); //↪️ Set(2) {2, 3}

// As you can see, even if we insert the same value multiple times, it only gets added once.

// Like a map, you can also insert objects, arrays, maps, and even other sets. However, be careful because anything that is not a number, string, or symbol would be matched by reference. Let’s do some examples.

// Using a Set with objects
const set1 = new Set();

// matching by value
set1.add({ a: 1, b: 2 });
set1.has({ a: 1, b: 2 }); // ↪️ false
set1.add({ a: 1, b: 2 }); // not ignored

// matching by reference
const a = { a: 1, b: 2 };
set1.add(a);
set1.has(a); // ↪️ true
set1.add(a); // this requests will be ignore.

// Set has 3 arrays with the same value, but since they all have different memory address it's allowed.
console.log(set1); // Set1 { {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 2} }

// As you can see, you can’t find an object using a new object (e.g. {a: 1, b: 2}); you need the reference to find it. If you need to match by value, you would need to convert it to a string using JSON.stringify.

// Workaround to find objects by value.

const set2 = new Set();

set2.add(JSON.stringify({ a: 1, b: 2 }));
set2.add(JSON.stringify({ a: 1, b: 2 })); // ignored

set2.has(JSON.stringify({ a: 1, b: 2 })); // ↪️ true

// Only one object, since strings are matched by value and not by reference.
console.log(set2); // Set { '{"a":1,"b":2}' }

// Removing duplicates from an array.
// One typical case for a Set is to eliminate duplicates from an array.

// Removing duplicates from an array
const arr = [1, 2, 2, 1, 3, 2];

// convert array to set
const set3 = new Set(arr);
// convert set to array
const uniqueValues = Array.from(set3);
// check array
console.log(uniqueValues); // [ 1, 2, 3 ]

// You can also do it all in one line.

// One-liner to remove duplicates from array.
const arr1 = [1, 2, 2, 1, 3, 2];
console.log([...new Set(arr1)]); // [ 1, 2, 3 ]

// Time Complexity of a Hash Set
// All operations on Hash Set are constant time on average: O(1). Like the Hash Map, there are cases when the the Set is getting full, and it would do a rehash taking O(n) for that one insertion.
