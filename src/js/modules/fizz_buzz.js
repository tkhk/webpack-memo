export const fizzbuzzCreator = max => (
  function* () {
    for (let i = 0; i < max; i++) {
      if (i % (3 * 5) === 0) yield "FizzBuzz";
      if (i % 3 === 0) yield "Fizz";
      if (i % 5 === 0) yield "Buzz";
      yield i;
    }
  }
)
