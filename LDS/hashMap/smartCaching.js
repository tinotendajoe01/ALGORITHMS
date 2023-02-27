// HM-A) Design a Least Recently Used (LRU) cache.
// This cache has a limit on the number of items it can store.
// Once the limit it’s reached, it will discard the least recently
// used item. Design a class that takes a limit value, and the methods
//  put and get, to insert and get data.
/**
 * This code is for an LRU (Least Recently Used) Cache. 
 * An LRU Cache is a data structure that stores a limited number of items and removes
 *  the least recently used item when it reaches its capacity. 

 * Least Recently Used (LRU) cache.
 * Key/Value storage with fixed max number of items.
 * Least recently used items are discarded once the limit is reached.
 * Reading and updating the values mark the items as recently used.
 */

class LRUCache {
  /**
   * @param {number} capacity - The max number of items on the cache
   */
  constructor(capacity) {}

  /**
   * Get the value associated with the key. Mark keys as recently used.
   * @param {number} key
   * @returns {number} value or if not found -1
   */
  get(key) {}

  /**
   * Upsert key/value pair. Updates mark keys are recently used.
   * @param {number} key
   * @param {number} value
   * @returns {void}
   */
  put(key, value) {}
}
const c = new LRUCache(2); // capacity: 2
c.put(2, 1); // Cache is [2:1]

c.put(1, 1); // Cache is [2:1, 1:1]
c.put(2, 3); // Cache is [1:1, 2:3]
c.put(4, 1); // Removed 1. Cache is [2:3, 4:1]
c.get(1); // Returns -1 (key 1 not found)
c.get(2); // Returns 3. Cache is [4:1, 2:3]
c.put(5, 5); // Removed key 4. Cache is [2:3, 5:5]
c.get(4); // Returns -1 (key 4 not found)

// Solution

// The LRU cache behavior is almost identical to the Map.

// The differences are:
// LRU cache has a limited size, while Map grows until you run out of memory.

// LRU cache removes the least used items once the limit is reached.

// We can extend the Map functionality. Also, the Map implementation on JavaScript already keeps the items by insertion order. Every time we read or update a value, we can remove it from where it was and add it back. That way, the oldest (least used) it’s the first element on the Map.
//inherits all the methods from the Map class.
class LRUCache extends Map {
  constructor(capacity) {
    //The constructor takes in a capacity parameter which is used to set the maximum size of the cache.
    super();
    this.capacity = capacity;
  }

  get(key) {
    if (!super.has(key)) return -1; //checks if the key exists in the cache and if so, returns its value and re-inserts it at the top (most recent)
    const value = super.get(key);
    this.put(key, value); // re-insert at the top (most recent).
    return value;
  }

  put(key, value) {
    if (super.has(key)) super.delete(key);
    super.set(key, value); //sets a new key-value pair in the cache
    if (super.size > this.capacity) {
      //if its size exceeds its capacity, it deletes the oldest key-value pair from the cache.
      const oldestKey = super.keys().next().value;
      super.delete(oldestKey);
    }
  }
}

// Complexity Analysis
// Time Complexity: O(1). All operations read, write, update, and delete takes O(1).

// Space complexity: O(k). In this case, k, is the capacity of the cache.
// Even if n has 1 million items, we would only hold to the k most recent ones.
