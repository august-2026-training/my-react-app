import { useRef, useState } from "react";
export default function TimerComponent() {
  // 1. Create a secret notebook initialized with 0
  const clickCount = useRef(0);
  let myCount = 0;
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    // 2. Add 1 to our count directly.
    clickCount.current = clickCount.current + 1;
    myCount = myCount + 1;
    setCounter(counter + 1);

    // 3. Log it out. You will see this update instantly in the console,
    console.log(`Button clicked ${clickCount.current} times!`);
    console.log("Local variable : ", myCount);
    console.log("State Counter : ", counter);
  }

  return (
    <div style={{ padding: "20px" }}>
      <p>Look at your browser Console to see the count going up silently!</p>
      <button onClick={handleButtonClick}>Click Me Quietly</button>
      <h5>Ref Variable : {clickCount.current}</h5>
      <h5>Local Variable : {myCount}</h5>
      <h5>State Variable : {counter}</h5>
    </div>
  );
}
