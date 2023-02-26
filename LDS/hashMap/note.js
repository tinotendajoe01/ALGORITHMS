// A Map is a data structure where a key is mapped to a value.
// It’s used for a fast lookup of values based on the given key.
//  Only one key can map to a value (no key duplicates are possible).

//  Map vs Array
// A map shares some similarities with an array.
//  In an array, the key/index is always a number,
//  while the value in a Map can be anything!

// Both an Array and Map are very fast for getting values by key
//  in constant time O(1) on average.

// A Map uses an array internally. It translates the key into an array’s
//  index using a hash function. That’s why it is also called "Hash Map" or "Hash Table".

// Map vs Objects
// JavaScript has two ways to use Maps: one uses objects ({}),
//  and the other is using the built-in Map.

const objMap = {};
// mapping values to keys
objMap["str"] = "foo"; // string as key
objMap[1] = "bar"; // number as key
objMap[{}] = "test1"; // object as key (not recommended)
const obj1 = {};
objMap[obj1] = "test2"; // object as key (not recommended)

// searching values by key
console.log(objMap[1]); //↪️ bar
console.log(objMap["str"]); //↪️ foo
console.log(objMap[{}]); //↪️ test2 👀
console.log(objMap[obj1]); //↪️ test2 👀

console.log(objMap); // {1: "bar", str: "foo", [object Object]: "test"}

//  Map vs. Object main differences:
// Object's keys should be strings, numbers, or symbols. Map's keys can be anything! Strings, numbers, symbols, arrays, objects, and even other maps!

// Objects are not guaranteed to be in insertion order. Maps guarantee insertion order.

// When using Objects as HashMaps, they might be polluted with other keys defined at the prototype chain. You need to use hasOwnProperty or Object.keys to avoid these issues. Maps doesn’t get polluted by the prototype chain.

// Maps has been optimized for cases of frequent additions and removals. Objects are not optimized.

// When do you use an Object over a Map then? When you need to use JSON since it doesn’t support Maps yet.

// You can convert from Map to Object and vice-versa:

const objMap = Object.fromEntries(myMap.entries()); // map -> obj
const map = new Map(objMap.entries()); // obj -> map

// For completeness, here are some of the most basic operations side-by-side.

// Object vs Map Side-by-Side

//
// Initialization
//
const obj1 = {}; // Empty
const obj2 = { adrian: 33, nathalie: 32 }; // w/values

const map1 = new Map(); // Empty
const map2 = new Map([
  ["adrian", 33],
  ["nathalie", 32],
]); // w/values

//
// Access
//
assert.equal(obj1.adrian, undefined);
assert.equal(obj2["adrian"], 33); // also "obj2.adrian"

assert.equal(map1.get("adrian"), undefined);
assert.equal(map2.get("adrian"), 33);

//
// Check if the key exists
//
assert.equal(obj1.adrian !== undefined, false);
assert.equal(obj2["adrian"] !== undefined, true);

assert.equal(map1.has("adrian"), false);
assert.equal(map2.has("adrian"), true);

//
// Adding new elements
//
obj2["Abi"] = 2;
obj2["Dudu"] = 2;

map2.set("Abi", 2).set("Dudu", 2);

//
// Deleting
//
delete obj2.Dudu;

map2.delete("Dudu");

//
// Iterating key/value pairs with for loops
//
for (var k in obj2) {
  console.log(`key: ${k}, value: ${obj2[k]}`);
}

for (const [k, v] of map2) {
  console.log(`key: ${k}, value: ${v}`);
}

//
// Iterating key/value pairs with
//
Object.keys(obj2).forEach((k) => console.log(`key: ${k}, value: ${obj2[k]}`));

map2.forEach((v, k) => console.log(`key: ${k}, value: ${v}`));

//
// Getting the size
//
assert.equal(Object.keys(obj2).length, 3);
assert.equal(map2.size, 3);

//
// Representation
//
console.log(obj2);
// { adrian: 33, nathalie: 32, Abi: 2 }
console.log(map2);
// Map { 'adrian' => 33, 'nathalie' => 32, 'Abi' => 2 }
