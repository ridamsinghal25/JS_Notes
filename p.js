function outerFunction() {
  const message = "Hello from the outer function!";

  function innerFunction() {
    const messageTwo = "Hello from the inner Function";

    function innerInnerFunction() {
      console.log(message);
      console.log(messageTwo);
    }

    return innerInnerFunction;
  }

  return innerFunction;
}

const myClosure = outerFunction();
const myClosureTwo = myClosure();
myClosureTwo();
