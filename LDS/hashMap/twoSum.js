// Fit two movies in a flight
// HM-1) You are working in an entertainment recommendation system for an airline. Given a flight duration (target) and an array of movies length, you need to recommend two movies that fit exactly the length of the flight. Return an array with the indices of the two numbers that add up to the target. No duplicates are allowed. If it’s not possible to return empty [].

// Common in interviews at: FAANG.

// Examples:

// twoSum([113, 248, 80, 200, 91, 201, 68], 316); // [1, 6] (248 + 68 = 316)
// twoSum([150, 100, 200], 300); // [2, 3] (100 + 200 = 300)
// twoSum([150, 100, 200], 150); // [] (No two numbers add up to 150)

/**
 * recommend two movies that fit into flight duration
 * @param {movies} //[list of movies to provided]
 *  @param flightDuration - targetflight duration
 * @return {[recommended]}// array of two movies recommended
 * This function takes in two arguments: an array of movie durations and a flight duration. The goal of the function is to determine if there are two movies in the array whose durations add up to the flight duration.


 */

function twoMovies(movies, flightDuration) {
  /**
     * The function starts by declaring a for loop that will iterate through each movie in the array. The loop uses the variable i as its counter, starting at 0 and incrementing by 1 until it reaches the end of the array (movies.length).

Within this first loop, there is a nested for loop that will iterate through each subsequent movie in the array. This nested loop uses the variable j as its counter, starting at i + 1 (so that it doesn't compare a movie to itself) and incrementing by 1 until it reaches the end of the array.

Inside this nested loop, there is an if statement that checks whether the sum of movies[i] and movies[j] equals flightDuration. If it does, then the function immediately returns an array containing i and j (the indices of the two movies that add up to flightDuration).

If no such pair of movies is found after iterating through all possible combinations, then the function returns an empty array ([]).

     */
  for (let i = 0; i < movies.length; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[i] + movies[j] === flightDuration) return [i, j];
    }
  }

  return [];
}

function twoMoviesMap(movies, flightDuration) {
  /**
     * This algorithm takes in an array of movie durations and a flight duration as input. It then finds two movies whose combined duration is equal to the flight duration, and returns their indices in the array.

Here are the steps of the algorithm:

1. Create a new empty Map object called `map`.
2. Loop through each movie in the `movies` array using a for loop.
3. For each movie, calculate its complement by subtracting its duration from the `flightDuration`. This gives us the duration of the second movie needed to complete the flight.
4. Check if `map` already has an entry for this movie's duration. If it does, that means we have found two movies whose combined duration is equal to `flightDuration`. In this case, return an array containing their indices (the index of the first movie is stored in `map` and the index of the second movie is `i`).
5. If we haven't found a match yet, add an entry to `map` with key equal to the complement and value equal to the index of this movie.
6. Repeat steps 3-5 for all movies in the array.
7. If we haven't found a match by this point, return an empty array.

Overall, this algorithm uses a Map data structure to keep track of which durations we have seen so far and their corresponding indices. By doing so, it can quickly check if there is another movie with a complementary duration that would complete our flight.

     */
  const map = new Map();//1

  for (let i = 0; i < movies.length; i++) {//2
    const complement = flightDuration - movies[i];//3
    if (map.has(movies[i])) return [map.get(movies[i]), i];//4
    map.set(complement, i);//5
  }

  return [];
}

const movies = [19, 7, 3];
console.log(twoMoviesMap(movies, 10));
