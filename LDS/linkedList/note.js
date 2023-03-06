// So, imagine you have a bunch of toys that you want to keep track of. You could put them all in a big box, but it might be hard to find the one you want when you need it. Instead, you could line them up one after the other and remember which toy comes next in line.

// In JavaScript, we can create a linked list by making an object that has two properties: one for the data we want to store (like the name of a toy), and another for the next link in the chain. We can keep adding new links to the chain by creating more objects with these two properties.

// So if we had three toys named "Teddy Bear", "Barbie", and "Lego Set", we could create three objects like this:
```
let teddyBear = { data: "Teddy Bear", next: null };
let barbie = { data: "Barbie", next: null };
let legoSet = { data: "Lego Set", next: null };
``` // Then we could link them together like this:
```
teddyBear.next = barbie;
barbie.next = legoSet;
```;
// Now we have a linked list with three toys! We can access any toy by starting at the first link (teddyBear) and following the `next` property until we get to the one we want.

/**
 * A list (or Linked List) is a linear data structure where each object has a pointer to the next one creating a chain. You can also have a back reference to the previous node.
 */

// Finding an item on the linked list takes O(n) time.
// Because in the worst-case, you will have to iterate over the whole list.

// Types of Linked List
// Linked Lists can be:
// Singly: every item has a pointer to the next.

// Doubly: every item has a reference to the next and the previous.

// Circular: the last element points to the first one, forming an infinite loop.

// JavaScript doesn’t have a built-in List. However, it’s straightforward to create.
