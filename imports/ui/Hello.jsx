import React, { useState } from "react";

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <p> test pipeline mod </p>
      <p> another one </p>
      <p> again 1236</p>
      <p> again 1239 </p>
    </div>
  );
};
