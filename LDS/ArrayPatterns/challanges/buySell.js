// tag::description[]
/**
 * Find the max profit from buying and selling a stock given their daily prices.
 * @examples
 *    maxProfit([5, 10, 5, 10]); // => 5
 *    maxProfit([1, 2, 3]); // => 2
 *    maxProfit([3, 2, 1]); // => 0
 * @param {number[]} prices - Array with daily stock prices
 * @returns {number} - Max profit
 */

// This function takes in an array of prices and returns the maximum
//  profit that can be made by buying and selling a single stock.
//   The function iterates through the array of prices, keeping
//   track of the lowest price seen so far (local) and the maximum
//   profit seen so far (max). For each price, it updates local to
//   be the minimum of itself and the current price, and updates max
//   to be the maximum of itself and the difference between the
//    current price and local. Finally, it returns max.

function maxProfit(prices) {
  let max = 0;
  let local = Infinity;
  for (let i = 0; i < prices.length; i++) {
    local = Math.min(local, prices[i]);
    max = Math.max(max, prices[i] - local);
  }
  return max;
}
// end::solution[]

// this fx is used to calc the max profit from a given array of stock prices
// it uses brute fore to loop through each element in the array
// compares it with every other element in the array.
// it then calc the difference between each pair of elements & SpeechRecognitionResultthe max. and finally returns the max

// tag::maxProfitBrute1[]
function maxProfitBrute1(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
}
// end::maxProfitBrute1[]

let prices = [5, 10, 5, 10];
console.log(`maximum profit you can obtain is ${maxProfit(prices)}`);
