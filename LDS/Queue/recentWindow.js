// design a class that uses a queue to keep track of the most recent requests within a time window:

class RequestCounter {
  constructor(timeWindow) {
    this.timeWindow = timeWindow;
    this.queue = [];
  }

  // Add a new request to the queue and remove any requests that are outside the time window
  addRequest(requestTime) {
    this.queue.push(requestTime);
    const cutoffTime = requestTime - this.timeWindow;
    while (this.queue.length > 0 && this.queue[0] < cutoffTime) {
      this.queue.shift();
    }
  }

  // Return the number of requests in the queue
  getRequestCount() {
    return this.queue.length;
  }
}
// In this implementation, the RequestCounter class takes a timeWindow parameter in the constructor that specifies the maximum time window to consider for the request count. The class uses a queue to store the request times, with new requests being added to the end of the queue using the addRequest() method.

// The addRequest() method also removes any requests from the front of the queue that are outside the time window. This is done by calculating a cutoff time based on the current request time and the time window, and then removing any requests from the front of the queue that have a time earlier than the cutoff time.

// Finally, the getRequestCount() method returns the number of requests currently in the queue, which represents the number of requests within the time window.
