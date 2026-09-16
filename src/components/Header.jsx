import { Link } from 'react-router-dom';

export default function Header() {
  return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/display">
          Display
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/counter">
          Counter
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/colorlist">
          Color List
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/toggle">
          Toggle
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/listtasks">
          List Tasks
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/fruitlist">
          Fruit List
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/copy">
          Copy
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/movies">
          Movies
        </Link>
      </li>
    </ul>
  </div>
</nav>
  )
}
