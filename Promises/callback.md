# Callback

A callback is a function that is passed as an argument to another function, which
can then be executed after some kind of event or operation. Callbacks are
commonly used for handling asynchronous operations in JavaScript.

**Example of a Callback:**

```js
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John Doe", age: 30 };
    callback(data);
  }, 2000); // Simulate a network request with a 2-second delay
}

function displayData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

// Pass the displayData function as a callback to fetchData
fetchData(displayData);
```

In this example:

- fetchData is a function that simulates fetching data with a delay (using setTimeout).
- displayData is a callback function that is passed to fetchData and executed once the data is "fetched".

# Callback Hell

Callback Hell refers to a situation where callbacks are nested within other
callbacks multiple levels deep, making the code difficult to read and maintain.
This usually happens when multiple asynchronous operations need to be performed in sequence.

```js
function fetchData1(callback) {
  setTimeout(() => {
    console.log("Data from fetchData1");
    callback();
  }, 1000);
}

function fetchData2(callback) {
  setTimeout(() => {
    console.log("Data from fetchData2");
    callback();
  }, 1000);
}

function fetchData3(callback) {
  setTimeout(() => {
    console.log("Data from fetchData3");
    callback();
  }, 1000);
}

function fetchData4(callback) {
  setTimeout(() => {
    console.log("Data from fetchData4");
    callback();
  }, 1000);
}

// Nested callbacks leading to callback hell
fetchData1(() => {
  fetchData2(() => {
    fetchData3(() => {
      fetchData4(() => {
        console.log("All data fetched");
      });
    });
  });
});
```
