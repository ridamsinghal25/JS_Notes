```js
"use strict";
let globalv = "globalv";

function outerFunction() {
  const outerVariable = "I am outer";
  function o() {
    console.log("O");
  }

  function innerFunction() {
    const innerVariable = "I am inner";
    function i() {
      console.log("I");
    }
    function nestedFunction() {
      const nestedVariable = "I am nested";

      function deeplyNestedFunction() {
        const deepVariable = "I am deep";

        function anotherleveldeep() {
          console.log(deepVariable); // put debuggar here
          console.log(nestedVariable);
          console.log(outerVariable);
          console.log(innerVariable);
          console.log(globalv);
          o();
          i();
        }

        return anotherleveldeep; // Return the innermost function
      }

      return deeplyNestedFunction(); // Return the result of deeplyNestedFunction, which is anotherleveldeep function
    }

    return nestedFunction(); // Return the result of nestedFunction, which is deeplyNestedFunction
  }

  return innerFunction(); // Return the result of innerFunction, which is nestedFunction
}

const closureExample = outerFunction(); // Invoke outerFunction and capture inner function
const nestedClosureExample = closureExample(); // Invoke inner function and capture nested function
const deeplyNestedClosureExample = nestedClosureExample(); // Invoke nested function and capture deeply nested function

deeplyNestedClosureExample(); // Invoke deeply nested function, accessing all variables through closures
```
