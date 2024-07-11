# Lexical Environment

The lexical environment of a function refers to the environment
in which the function was defined, including the variables,
functions, and their scopes at the time of its definition. In the
provided JavaScript code:

**OR**

A lexical environment in programming refers to the context in
which code is executed, specifically regarding the availability
and scope of variables and functions. It's determined by where
variables and functions are declared or defined within the source
code, not where they are invoked.

## Key aspects of a lexical environment include:

1. **Scope Chain:** Each lexical environment has access to
   variables and functions defined in its outer lexical environment.
   This chain continues until it reaches the global scope.

2. **Variable Environment:** This contains the actual variables
   and their values that were defined within that lexical scope.

3. **Lexical Scope:** Determines the visibility and accessibility
   of variables and functions based on their location in the source code.

```js
function outerFunction() {
  const message = "Hello from the outer function!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // This will print: Hello from the outer function!
```

- **Outer Function (outerFunction):**

  - Defines a variable message with the value "Hello from the outer function!".
  - Defines innerFunction within its scope.

- **Inner Function (innerFunction):**

      - Accesses the variable message from its outer lexical scope (outerFunction).

- **Lexical Environment of innerFunction:**

      - Includes the variable message from outerFunction because
      innerFunction was defined within outerFunction. This
      linkage is preserved even after outerFunction has finished
      executing, forming a closure.

Therefore, the lexical environment of innerFunction encompasses
the variable message from outerFunction, allowing innerFunction
to access and use message even after outerFunction has returned
and its scope theoretically would have been destroyed in other
programming paradigms.

## Lexical Scope

```js
function outerFunction() {
  const message = "Hello from the outer function!";

  function innerFunction() {
    const messageTwo = "Hello from the inner Function";

    function innerInnerFunction() {
      console.log(message);
      console.log(messageTwo);
    }

    return innerInnerFunction; // Return the function itself, not calling it
  }

  return innerFunction; // Return the inner function itself, not calling it
}

const myClosure = outerFunction(); // Invoke outerFunction to get innerFunction
const innerFn = myClosure(); // Invoke innerFunction to get innerInnerFunction
innerFn(); // Finally, invoke innerInnerFunction to log messages
```

The lexical scope of **innerFunction** is determined by where it is defined in relation to its parent scopes. Here’s how it breaks down:

- Lexical Scope of innerFunction:
  - **Encloses:** messageTwo and innerInnerFunction.
  - **Scope:** innerFunction is defined within outerFunction, so its lexical scope includes:
    - Access to **message**, which is defined in **outerFunction**.
    - Access to **messageTwo**, which is defined within **innerFunction**.
    - Access to **innerInnerFunction**, which is also defined within **innerFunction**.

# Lexical Scope v/s Lexical Environment

**Lexical scope** refers to the scope of a variable or function
defined by its location in the source code during the lexing
phase (or parsing phase) of compilation. It determines where a
variable or function can be accessed in your code based on where
it is declared.

**Lexical environment** refers to the actual environment or
context in which the code is executed. It includes all the
variables and functions that are currently in scope during the
execution of a particular piece of code.

**OR**

**Lexical scope** defines the rules for variable visibility and
access based on where variables and functions are declared in the source code.

**Lexical environment** refers to the runtime context that
captures the state of these variables and functions during execution.
