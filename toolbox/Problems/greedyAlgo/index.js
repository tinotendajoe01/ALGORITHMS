// Imagine that you have a bunch of candies of different weights and you want to eat as much candy as possible without getting too full. You decide to use a greedy algorithm to do this.

// A greedy algorithm is like being greedy - you always choose the candy that's the heaviest at the moment, without thinking about the future. You keep doing this until you can't eat any more candy without getting too full.

function eatCandy(candies, maxWeight) {
  candies.sort((a, b) => b.weight - a.weight); // Sort the candies by weight in descending order.
  let totalWeight = 0; // Initialize the total weight to 0.
  let eatenCandies = []; // Initialize the array of eaten candies to an empty array.
  for (let i = 0; i < candies.length; i++) {
    // Loop through the candies.
    if (totalWeight + candies[i].weight <= maxWeight) {
      // If we can eat the current candy without getting too full...
      eatenCandies.push(candies[i]); // Add the current candy to the array of eaten candies.
      totalWeight += candies[i].weight; // Add the weight of the current candy to the total weight.
    }
  }
  return eatenCandies; // Return the array of eaten candies.
}
// Here's how this function works:

// We start by sorting the candies by weight in descending order, so that we always eat the heaviest candy first.

// We initialize two variables: totalWeight to keep track of the total weight of the eaten candies, and eatenCandies to keep track of the candies we've eaten.

// We loop through the candies, and for each candy, we check if we can eat it without getting too full. If we can, we add it to the eatenCandies array and update the totalWeight.

// We keep looping through the candies until we can't eat any more candy without getting too full.

// Finally, we return the array of eaten candies.

// So, for example, if we call eatCandy([{ weight: 5 }, { weight: 3 }, { weight: 7 }, { weight: 2 }], 10), the function will return [{ weight: 7 }, { weight: 3 }], since we can eat the 7-weight candy and the 3-weight candy without getting too full, but not the 5-weight candy or the 2-weight candy.

// I hope this helps you understand greedy algorithms a bit better!
