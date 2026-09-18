import React from "react";
import { Outlet, Link } from "react-router-dom";
import authService from "./users/authService.jsx";

export default function Dashboard() {
  console.log(authService.isAdmin);
  console.log(authService.isCustomer);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {authService.isCustomer && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/display">
                  Display
                </Link>
              </li>
            )}
            {authService.isCustomer && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/counter">
                  Counter
                </Link>
              </li>
            )}
            {authService.isCustomer && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/colorlist">
                  Color List
                </Link>
              </li>
            )}
            {authService.isCustomer && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/toggle">
                  Toggle
                </Link>
              </li>
            )}
            {authService.isCustomer && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/listtasks">
                  List Tasks
                </Link>
              </li>
            )}
            {authService.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/fruitlist">
                  Fruit List
                </Link>
              </li>
            )}
            {authService.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/copy">
                  Copy
                </Link>
              </li>
            )}
            {authService.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/movies">
                  Movies
                </Link>
              </li>
            )}
            {authService.isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/dash/timer">
                  Timer
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
