import { useState } from "react";
import Display from "./components/display/Display.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is App Component!</h1>
      <p>This is a paragraph</p>
      <Display />
      <Counter />
    </>
  );
}

export default App;
