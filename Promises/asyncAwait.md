# Async/Await

async and await are syntactic sugar built on top of Promises, introduced in
ES2017, to make asynchronous code look and behave more like synchronous code.
This helps in writing cleaner and more readable code.

## Async

Async function always return a promise

- If it is a promise then it is returned as it.
- But if it is a value then async function wrap it in a promise and then return it.

Async return a value

```js
async function hello() {
  return "hello";
}

const result = hello();
console.log(result);

// OUTPUT: Promise {<fulfilled>: 'hello'}
```

Async function return a promise

```js
const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

async function promiseFunction() {
  return promise;
}

const result = promiseFunction();
console.log(result);

// OUTPUT: Promise {<fulfilled>: 'Promise resolved'}
```

## Await

await Keyword: suspend the execution of an async function, waiting for the Promise to resolve.
