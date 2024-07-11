# Table of Content

1. First Class Function
2. Function Statement
3. Function Expression
4. Difference between Function Statement and Expression
5. Anonymous Function
6. Named Function Expression

# First Class Function (First Class Citizens)

Functions are called First Class Function in JavaScript becacuse functions in
JavaScript can be treated like any other variables. It means that a function can
be passed as an argument to other functions, can be returned by another function
and can be assigned as a value to a variable.

1. Assigning Function to a variable

```js
const func = function () {
  console.log("I am a First Class Function");
};

func(); // Output: I am a First Class Function
```

2. Passing Functions as Arguments

```js
function callFunction(func) {
  // Taking function as argument
  func();
}

function sayHello() {
  console.log("Hello!");
}

callFunction(sayHello); // Output: Hello!
```

3. Returning Functions from Other Functions

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}

const returnedFunction = sayHello();
returnedFunction(); // calling returned function
// Output: Hello!
```

# Function Statement (Function Declaration)

Function Statement or Function Declaration is nothing but defining a named
function using the **function** keyword.

```js
function func() {
  console.log("I am a function statement");
}
```

There is one thing important about function statement is that they require name.

# Function Expression

A Function Expression defines a function inside an expression. These functions
can be anonymous or named.

Now😊, you might think what the heck is this.

To understand this, you need to understand what expressions are in javascript.

**Expression in JavaScript**

Expression in javascript are block of code that evaluates to a value.

Conceptually speaking, there are two kinds of expressions: those that perform
some sort of assignment and those that evaluate to a value.

For example, x = 10 is an expression that performs an assignment. This expression
itself evaluates to 10. Such expressions make use of the assignment operator.

On the other side, the expression 10 + 9 simply evaluates to 19. These
expressions make use of simple operators.

Now, if we come back to your definition, when we say that a function expression
defines a function inside an expression, it means that the function itself is
treated as a value that can be used in various place within the code. This
value can be assigned to variables, passed as arguments to other functions, or
even returned from other functions.

```js
let greet = function (name) {
  return "Hello, " + name + "!";
};
```

In this example:

- function(name) { return "Hello, " + name + "!"; } is a function expression.
- It is defined inside an assignment expression (let greet = ...).
- The entire expression let greet = function(name) { ... }; evaluates to a value,
  which is a function.

## Key differences between Function Statement and Expression

1. Hoisting:

- Function Declarations: Are hoisted. You can call the function before it is defined.
- Function Expressions: Are not hoisted. You cannot call the function before it is defined.

```js
sayHello(); // Output: Hello!
sayHi(); // Throw out an Error

function sayHello() {
  console.log("Hello!");
}

let sayHi = function () {
  console.log("Hi!");
};
```

2. Naming:

- Function Declarations: Must have a name.
- Function Expressions: Can be named or anonymous.

# Anonymous Function

An Anonymous Function in JavaScript is a function which does not have any name.

```js
// Anonymous function as a function expression
const add = function (x, y) {
  return x + y;
};

// Anonymous function passed directly as an argument
setTimeout(function () {
  console.log("Delayed Message");
}, 1000);
```

# Named Function Expression

The Function Expression which has a name or identifier is called Named Function Expression.

```js
let add = function sum(a, b) {
  return a + b;
};
```

In this example:

- function sum(a, b) { return a + b; } is the named function expression.
- sum is the name of the function inside the expression.
- let add = ... assigns the function expression to the variable add.

However, there is **important point** to remember that calling function like
shown in below example causes an error

```js
let add = function sum(a, b) {
  return a + b;
};

sum(); // calling like this will cause an error
```

This causes error because JavaScript tries to find a function named sum in the
current scope. However:

- **Visibility**: The name sum is only visible inside the function expression where it is defined (let add = function sum(a, b) { ... };).
- **Scope**: Outside of this assignment, sum is not defined. It's not accessible in the global scope or any other scope.
