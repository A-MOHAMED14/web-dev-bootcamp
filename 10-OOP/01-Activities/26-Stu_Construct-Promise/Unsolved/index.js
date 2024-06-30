const http = require("http");

// TODO: What does this function return?
// A Promise object, which enables the user to chain .then() and .catch() to asynchronously handle the resolved value or rejected error.
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = "";

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          rawData += chunk;
        });
      })
      .on("error", (e) => {
        reject(e);
      })
      .on("close", () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // TODO: What the following line do?
          // If status code is anything other than 200, we get an error, will call the reject function with the error and so the promise will be rejected
          reject(error);
        } else {
          // TODO: What does the following line do?
          // If the status code is 200, then the data has been received, will call the resolve function with the data and so the promise is resolved
          resolve(rawData);
        }
      });
  });

asyncRequest("http://numbersapi.com/random/trivia")
  // TODO: When is the callback function passed to .then() called by the promise?
  // when the resolve parameter is called in the Promise.
  .then((data) => console.log(data))
  // TODO: When is the callback function passed to .catch() called by the promise?
  // when the reject parameter is called in the Promise
  .catch((error) => console.log(error));
