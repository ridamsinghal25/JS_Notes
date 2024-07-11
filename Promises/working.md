# Deep Dive into the Execution Context of Promises and Async/Await

The only difference is the execution context between promise and async/await.

When a Promise is created and the asynchronous operation is started, the code
after the Promise creation continues to execute synchronously. When the Promise
is resolved or rejected, the attached callback function is added to the microtask
queue. The microtask queue is processed after the current task has been completed
but before the next task is processed from the task queue. This means that any
code that follows the creation of the Promise will execute before the callback
function attached to the Promise is executed.

On the other hand, with Async/Await, the await keyword causes the JavaScript
engine to pause the execution of the async function until the Promise is resolved
or rejected. While the async function waits for the Promise to resolve, it does
not block the call stack, and any other synchronous code can be executed. Once
the Promise is resolved, the execution of the async function resumes, and the
result of the Promise is returned. If rejected, it throws an error value.

## Promises

### Execution Context with Promises:

1. **Promise Creation**: When a promise is created using new
   Promise(executor), the executor function runs immediately. Any
   asynchronous operation inside this executor starts right away.
2. **Synchronous Continuation**: After the promise creation, the
   code following the promise executes synchronously.
3. **Microtask Queue**: Once the promise is resolved or rejected,
   the .then() or .catch() callback is added to the microtask queue.
4. **Microtask Execution**: The microtask queue is processed
   after the current task completes but before the next task in the
   event loop. This ensures that any synchronous code that follows
   the promise creation will execute before the promise’s callbacks.

**Code Example**

```js
const promise = new Promise((resolve, reject) => {
  console.log("Promise started");
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 1000);
});

console.log("After promise creation");

promise.then((result) => {
  console.log(result);
});

console.log("End of script");
```

**Output**

```js
Promise started
After promise creation
End of script
Promise resolved value

```

**Explanation:**

- Promise started logs immediately when the promise is created.
- After promise creation and End of script execute synchronously.
- After 1 second, the promise resolves, and Promise resolved
  value is logged because the callback function is added to the microtask queueand executed once the main script completes.

## Async/Await

### Execution Context with Async/Await:

1. **Async Function and Await:** When the await keyword is encountered inside an
   async function, the JavaScript engine pauses the execution of the async function
   until the awaited promise is settled (resolved or rejected).
2. **Non-blocking Behavior:** While the async function is paused, other
   synchronous code continues to execute. The call stack is not blocked.
3. **Resuming Execution:** Once the promise is resolved, the async function
   resumes execution from the point where it was paused. If the promise is rejected,
   an error is thrown which can be caught using try/catch.

**Code Example:**

```js
async function fetchData() {
  console.log("Fetching data started");

  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 1000);
    });
    console.log("Data:", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

console.log("Before async function");

fetchData();

console.log("After async function");
```

**Output:**

```js
Before async function
Fetching data started
After async function
Data: Data fetched successfully

```

**Explanation:**

- Before async function and After async function execute synchronously.
- Fetching data started logs before the await keyword pauses the execution.
- The async function pauses at await and allows other synchronous code to run.
- After 1 second, the promise resolves, and the async function resumes, logging
  Data: Data fetched successfully.

# Key Differences Between Promises and Async/Await

1. Synchronous Continuation:

- **Promises:** After a promise is created, the code following it continues to
  execute synchronously. The promise’s .then() or .catch() callbacks are added to
  the microtask queue.
- **Async/Await:** The await keyword pauses the execution of the async function.
  The code after await does not execute until the promise is settled. Meanwhile,
  other synchronous code can run.

2. Code Readability:

- **Promises:** Requires chaining with .then() and .catch(), which can lead to
  nested structures.
- **Async/Await:** Provides a more synchronous-looking code structure, making it
  easier to read and maintain.

3. Error Handling:

- **Promises:** Errors are caught using .catch().
- **Async/Await:** Errors are caught using try/catch, which can be more intuitive and inline with synchronous error handling.
