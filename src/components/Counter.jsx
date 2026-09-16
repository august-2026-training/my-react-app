import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
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

    // programtically navigate to another component - /fruitlist
    navigate("/fruitlist");
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
