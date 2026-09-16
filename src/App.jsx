
import Display from "./components/display/Display.jsx";
import Counter from "./components/Counter.jsx";
import ColorList from "./components/ColorList.jsx";
import Toggle from "./components/Toggle.jsx";
import ListTasks from "./components/ListTasks.jsx";
import FruitList from "./components/fruits/FruitList.jsx";
import Header from "./components/Header.jsx";
import MovieAdd from "./components/movies/MovieAdd.jsx";
import MovieEdit from "./components/movies/MovieEdit.jsx";
import MovieList from "./components/movies/MovieList.jsx";
import MovieDashboard from "./components/movies/MovieDashboard.jsx";
import Copy from "./components/Copy.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    
     <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route path="/display" element={<Display />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/colorlist" element={<ColorList />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/movies" element={<MovieDashboard />} >
        <Route path="/movies/add" element={<MovieAdd />} />
        <Route path="/movies/edit/:movId" element={<MovieEdit />} />
        <Route path="/movies/list" element={<MovieList />} />
      </Route>
      <Route path="/listtasks" element={<ListTasks />} />
      <Route path="/fruitlist" element={<FruitList />} />
      <Route path="/copy" element={<Copy />} />
     </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
