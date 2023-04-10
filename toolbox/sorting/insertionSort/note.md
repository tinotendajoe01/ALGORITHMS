Imagine that you have a bunch of playing cards in your hand and you want to arrange them in order from smallest to largest. You decide to use insertion sort to do this.

First, you take the first card and set it aside. This card is now considered "sorted".

Next, you pick up the second card and compare it to the first card. If the second card is smaller than the first card, you swap their positions. Otherwise, you leave them as they are.

Then, you pick up the third card and compare it to the first two cards. You insert it in the correct position between the first and second cards, or the second and third cards, depending on its value.

You continue this process for all the remaining cards, inserting each card in its correct position in the "sorted" section of the cards.

In JavaScript, we can write an insertion sort algorithm like this:

function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) { // Loop through the array from the second element to the last.
let j = i - 1; // Set a variable to keep track of the previous element.
let tmp = arr[i]; // Store the current element in a temporary variable.
while (j >= 0 && arr[j] > tmp) { // While the previous element is greater than the current element...
arr[j + 1] = arr[j]; // Shift the previous element one position to the right.
j--; // Decrement the previous element's index.
}
arr[j + 1] = tmp; // Insert the current element in the correct position.
}
return arr; // Return the sorted array.
}
So, just like with your playing cards, this algorithm goes through the array of numbers and compares each number to the numbers before it. If a number is smaller, it is inserted into the correct position in the "sorted" section of the array. This process is repeated until the array is sorted in ascending order.
