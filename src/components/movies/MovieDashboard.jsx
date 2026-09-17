import { Outlet, Link } from "react-router-dom";

export default function MovieDashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-warning navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dash/movies/list">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dash/movies/add">
                Add Movie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
