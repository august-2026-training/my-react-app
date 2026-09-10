import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  //let counter = 0;

  function incrementCounter() {
    //counter = counter + 1;
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  }

  return (
    <>
      <h1>This is Counter Component</h1>
      <h1 className="text-success">{counter}</h1>
      <button onClick={incrementCounter} className="btn btn-primary">
        Click Me
      </button>
    </>
  );
}
