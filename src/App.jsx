import { useState } from "react";
import Display from "./components/display/Display.jsx";
import Counter from "./components/Counter.jsx";
import ColorList from "./components/ColorList.jsx";
import Toggle from "./components/Toggle.jsx";
import ListTasks from "./components/ListTasks.jsx";
import FruitList from "./components/fruits/FruitList.jsx";
import MovieAdd from "./components/movies/MovieAdd.jsx";
import Copy from "./components/Copy.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is App Component!</h1>

      {/* <Display /> */}
      {/* <Counter /> */}
      {/* <ColorList /> */}
      {/* <Toggle /> */}
      {/* <ListTasks /> */}
      {/* <FruitList /> */}
      <MovieAdd />
      {/* <Copy /> */}
    </>
  );
}

export default App;
