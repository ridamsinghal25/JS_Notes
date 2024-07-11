# Promises

A Promise is an object representing the eventual completion (or failure) of an
asynchronous operation and its resulting value. Promises provide a more robust
way to handle asynchronous code compared to callbacks.

# States of a Promise

A Promise can be in one of three states:

- Pending: The initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.

# Resolving a Promise

A promise is considered resolved if it has been either fulfilled
or rejected, or if it has been "locked in" to follow the state of
another promise. Once a promise is resolved, further attempts to
resolve or reject it have no effect.

# Resolved

The term "resolved" can mean two things:

1. **A Promise that is Fulfilled or Rejected:** A promise that has
   settled into one of the final states.
2. **Resolution of a Promise with Another Promise:** A promise can be
   resolved with another promise, meaning it will adopt the state of
   that other promise.

Example: Simple Resolution

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success"); // The promise is now fulfilled with the value 'Success'
});

promise.then((value) => console.log(value)); // Logs: "Success"
```

Example: Resolution with Another Promise
When a promise is resolved with another promise, it will "lock-in" to the state
of the other promise. This means the first promise will adopt the fulfillment or
rejection state of the second promise.

```js
const promise1 = new Promise((resolve, reject) => {
  resolve("Success from promise1");
});

const promise2 = new Promise((resolve, reject) => {
  resolve(promise1); // promise2 is resolved with promise1
});

promise2.then((value) => console.log(value)); // Logs: "Success from promise1"
```

In this example:

- promise1 is a promise that resolves with the value 'Success from promise1'.
- promise2 is resolved with promise1. This means promise2 will eventually settle to the same state as promise1.

# Resolved vs Settled

## Resolved:

- A promise is resolved if it has either been fulfilled,
  rejected, or "locked in" to follow another promise or thenable.
- A resolved promise can be in one of three states: fulfilled,
  rejected, or pending but locked in to follow another promise's eventual state.
- Once a promise is resolved, further attempts to resolve or
  reject it have no effect.

  ```js
  const promise = new Promise((resolve, reject) => {
    resolve("Success");
    reject("Error"); // This will have no effect because the promise is already resolved
    resolve("Another success"); // This will also have no effect
  });
  promise.then((value) => console.log(value)); // Logs: "Success"
  ```

## Settled:

- A promise is settled if it has either been fulfilled or rejected.
- Settled means the promise is no longer pending and has reached a final state.
- All settled promises are resolved, but not all resolved
  promises are settled (specifically when resolved with another pending promise).

## Sequence of Execution of Promise States

### Pending:

- The initial state of a promise.
- The promise is neither fulfilled nor rejected.

### Resolved:

- The promise transitions to the resolved state if:
- It is fulfilled with a value.
- It is rejected with a reason (error).
- It is locked in to follow another promise or thenable.
- A resolved promise that follows another promise will eventually
  settle when the followed promise settles.

### Settled:

- The promise is settled when it is either:
- **Fulfilled**: The promise has completed successfully with a value.
- **Rejected**: The promise has failed with a reason (error).

## Code Examples

Example 1: Resolved and Settled (Fulfilled)

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success"); // The promise is resolved and fulfilled with the value 'Success'

  promise.then((value) => console.log(value)); // Logs: "Success"
});
```

- **Pending**: Initially, the promise is pending.
- **Resolved**: resolve('Success') is called, resolving the promise.
- **Settled** (Fulfilled): The promise is fulfilled with the value 'Success'.

Example 2: Resolved with Another Promise

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success from promise1"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  resolve(promise1); // promise2 is resolved with promise1
});

promise2.then((value) => console.log(value)); // Logs: "Success from promise1"
```

- promise1:

  - **Pending**: Initially, promise1 is pending.
  - **Resolved**: After 1 second, promise1 is resolved with the value 'Success from promise1'.
  - **Settled** (Fulfilled): promise1 is fulfilled with the value 'Success from promise1'.

- promise2:

  - **Pending**: Initially, promise2 is pending.
  - Resolved: resolve(promise1) is called, resolving promise2
    with promise1. promise2 is now locked in to follow the state of promise1.
  - **Settled** (Fulfilled): When promise1 is fulfilled, promise2
    also settles as fulfilled with the same value 'Success from promise1'.
