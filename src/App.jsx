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
import Login from "./components/users/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Dashboard />}>
            <Route path="/dash/display" element={<Display />} />
            <Route path="/dash/counter" element={<Counter />} />
            <Route path="/dash/colorlist" element={<ColorList />} />
            <Route path="/dash/toggle" element={<Toggle />} />
            <Route path="/dash/movies" element={<MovieDashboard />}>
              <Route path="/dash/movies/add" element={<MovieAdd />} />
              <Route path="/dash/movies/edit/:movId" element={<MovieEdit />} />
              <Route path="/dash/movies/list" element={<MovieList />} />
            </Route>
            <Route path="/dash/listtasks" element={<ListTasks />} />
            <Route path="/dash/fruitlist" element={<FruitList />} />
            <Route path="/dash/copy" element={<Copy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
