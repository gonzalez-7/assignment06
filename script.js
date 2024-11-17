// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Start an infinite loop to keep trying until the operation succeeds.
  while (true) {
    try {
      // Attempt to multiply the two numbers using primitiveMultiply.
      // If the operation succeeds, return the result and exit the loop.
      return primitiveMultiply(a, b);
    } catch (e) {
      // If an exception is thrown, check the type of the exception.
      if (!(e instanceof MultiplicatorUnitFailure)) {
        // If the exception is not of type MultiplicatorUnitFailure,
        // rethrow it to avoid handling unexpected errors.
        throw e;
      }
      // If the exception is of type MultiplicatorUnitFailure,
      // do nothing and let the loop retry the operation.
    }
  }
}


console.log(reliableMultiply(8, 8)); // outputs 64
