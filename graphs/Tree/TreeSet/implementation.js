// Converts an array or any iterable data structure to a set
function toSet(iterable) {
  // Create a new Set object and add each item in the iterable to it
  return new Set(iterable);
}

// Removing duplicates from an Array using a Set
function removeDuplicates(array) {
  // Convert the array to a Set to remove duplicates
  const set = new Set(array);
  // Convert the Set back to an array and return it
  return Array.from(set);
}

// Adding elements to a TreeSet
class TreeSet {
  constructor() {
    this.tree = new Set(); // Create a new Set to store the elements
  }

  // Add an element to the TreeSet
  add(value) {
    this.tree.add(value); // Use the add() method of the Set to add the value
  }

  // Searching for values in a TreeSet
  has(value) {
    return this.tree.has(value); // Use the has() method of the Set to check if the value is in the TreeSet
  }

  // Deleting elements from a TreeSet
  delete(value) {
    return this.tree.delete(value); // Use the delete() method of the Set to remove the value from the TreeSet
  }
}

// Here's an explanation of each function:

// toSet(iterable): This function takes an iterable (like an array) and converts it to a Set. It does this by creating a new Set object and passing the iterable to its constructor. The Set constructor automatically adds each item in the iterable to the new Set.

// removeDuplicates(array): This function takes an array and removes any duplicates by converting it to a Set and then back to an array. It does this by creating a new Set from the array to remove duplicates, and then using the Array.from() method to convert the Set back to an array.

// TreeSet: This is a class that represents a TreeSet data structure. It uses a Set to store the elements, so it has the same methods as a Set (like add(), has(), and delete()).

// add(value): This method adds a new value to the TreeSet. It does this by calling the add() method of the Set that the TreeSet is using to store the elements.

// has(value): This method checks if a value is in the TreeSet. It does this by calling the has() method of the Set that the TreeSet is using to store the elements.

// delete(value): This method removes a value from the TreeSet. It does this by calling the delete() method of the Set that the TreeSet is using to store the elements.
