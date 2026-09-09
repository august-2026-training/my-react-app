import { useState } from "react";
import Display from "./components/display/Display.jsx";
import Counter from "./components/Counter.jsx";
import ListColors from "./components/ListColors.jsx";
import Toggle from "./components/Toggle.jsx";
import ListTasks from "./components/ListTasks.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is App Component!</h1>
      <p>This is a paragraph</p>
      {/* <Display /> */}
      {/* <Counter />
      <ListColors />
      <Toggle /> */}
      <ListTasks />
    </>
  );
}

export default App;
