let's imagine you have a bunch of colored marbles in your hand, and you want to arrange them in order from smallest to biggest. You decide to use bubble sort to do this.

First, you start by comparing the first two marbles in your hand. If the first marble is bigger than the second marble, you switch their positions. Otherwise, you leave them as they are.

You then move on to the next two marbles and do the same thing. You keep doing this until you reach the end of your marbles. This is called a pass.

Now, you repeat the same process, but this time you stop one marble short of the end. You keep doing this until you have done as many passes as you need to in order to get all the marbles in order.

Each time you do a pass, the biggest marble will "bubble up" to the end of the list like a bubble rising to the surface of water. Hence, the name "bubble sort".

In JavaScript, we can write a bubble sort algorithm like this:

function bubbleSort(arr) {
let len = arr.length;
for (let i = 0; i < len; i++) {
for (let j = 0; j < len - 1; j++) {
if (arr[j] > arr[j + 1]) {
let tmp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = tmp;
}
}
}
return arr;
}
So, just like with your colored marbles, this algorithm goes through the array of numbers and compares each pair of adjacent numbers. If the first number is bigger than the second one, their positions are swapped. This process is repeated until the array is sorted in ascending order.
It uses JavaScript ES6 destructing arrays.

JavaScript Array destructuring
Assignment separate from declaration

A variable can be assigned to its values using the destructing syntax.

let a, b;

[a, b] = [1, 2];
console.log(a); //↪️ 1
console.log(b); //️↪️ 2
Swapping variables

Two variables' values can be swapped in one line using the destructuring expression.

[a, b] = [b, a];
console.log(a); //↪️ 2
console.log(b); //️↪️ 1
Without the destructuring assignment, swapping two values requires a temporary variable.
