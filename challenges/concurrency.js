function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data); // Data fetched
});
console.log("Fetching data...");

//parrale...https://blog.logrocket.com/parallelism-concurrency-and-async-programming-in-node-js/
// main.js
const worker = new Worker("worker.js");

worker.onmessage = (event) => {
  console.log("Message from worker:", event.data);
};

worker.postMessage("Hello, worker!");

// worker.js
self.onmessage = (event) => {
  console.log("Message from main:", event.data);
  self.postMessage("Hello, main!");
};
