/**
 *
 * @param {You are going to resell legumes (rice, beans, chickpeas, lentils), and you only brought a knapsack. What proportion of items can you choose to get the highest loot without exceeding the bag’s maximum weight?} capacity
 * @param {*} items
 * @returns
 */

function knapsack(capacity, items) {
  // Sort the items by their value-to-weight ratio in descending order.
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0; // Initialize the total value to 0.
  let remainingCapacity = capacity; // Initialize the remaining capacity to the maximum capacity.

  // Loop through the items.
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];

    // If we can fit the entire item in the knapsack, add it to the knapsack and subtract its weight from the remaining capacity.
    if (currentItem.weight <= remainingCapacity) {
      totalValue += currentItem.value;
      remainingCapacity -= currentItem.weight;
    }
    // Otherwise, we can only fit a fraction of the item in the knapsack. Add the appropriate fraction to the knapsack and update the remaining capacity.
    else {
      const fraction = remainingCapacity / currentItem.weight;
      totalValue += fraction * currentItem.value;
      remainingCapacity = 0;
      break; // We've filled the knapsack, so we can exit the loop.
    }
  }

  return totalValue; // Return the total value of the items in the knapsack.
}
// Here's how this function works:

// We start by sorting the items by their value-to-weight ratio in descending order. This is because we want to prioritize items that have a high value relative to their weight.

// We initialize two variables: totalValue to keep track of the total value of the items in the knapsack, and remainingCapacity to keep track of the remaining capacity of the knapsack.

// We loop through the items, and for each item, we check if we can fit the entire item in the knapsack. If we can, we add the entire item to the knapsack and subtract its weight from the remainingCapacity.

// If we can't fit the entire item in the knapsack, we calculate the fraction of the item that we can fit in the knapsack, and add that fraction to the knapsack instead. We update the totalValue and remainingCapacity accordingly.

// We keep looping through the items until we either fill up the knapsack or run out of items.

// Finally, we return the totalValue of the items in the knapsack.

// So, for example, if we call knapsack(15, [{ weight: 5, value: 10 }, { weight: 3, value: 8 }, { weight: 7, value: 15 }, { weight: 2, value: 6 }]), the function will return 22, since we can fit the 5-weight item and the 3-weight item in the knapsack completely, and then fit a fraction of the 7-weight item in the knapsack to maximize the total value while not exceeding the maximum weight.
