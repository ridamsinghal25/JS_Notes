const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully!");
  }, 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected !");
  }, 3000);
});

fetch("https://api.github.com/users/ridamsinghal25")
  .then((data) => promiseTwo) // .then() ----> 1
  .then((data) => console.log("Promise resolved: ", data))   // .then() ----> 2
  .catch((error) => console.log("error: ", error))   // .catch()

// Resolved state means that the promise is lock-in to meet the state of another promise
// For ex: In .then() ---> 1 if promise is used is "promiseOne" which is a promise then it is fulfilled
// but if promise used is 'promiseTwo' then it is rejected as .then() ----> 1 is forced to follow the state of 
// promiseOne or promiseTwo
