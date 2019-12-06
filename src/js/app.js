import React, { useState } from "react";
import { render } from "react-dom";
import { fizzbuzzGenerator } from './modules/fizz_buzz';

const fizzbuzz = fizzbuzzGenerator(10);
const fizzbuzzResult = [...fizzbuzz];

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1>FizzBuzz</h1>
      <button onClick={() => setIndex(index + 1)}>next</button>
      <p>{fizzbuzzResult[index]}</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
