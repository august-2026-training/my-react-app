import { useState, useEffect } from "react";
import authService from "./authService.jsx";
import userService from "./userService.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    userName: "",
    userPassword: "",
  });

  useEffect(() => {
    authService.removeUser();
    authService.removeJwt();
    authService.isAdmin = false;
    authService.isCustomer = false;
    authService.isLoggedIn = false;
  }, []);
  function handleChange(e) {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
    userService
      .login({ userId: 0, ...loginFormData })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
        // if we are here, login is successfull
        // store userInfo in sessionStorage
        authService.storeUser(resp.userInfo);
        // store jwtToken in sessionStorage
        authService.storeJwt(resp.jwtToken);
        authService.isAdmin = resp.userInfo.allRoles?.includes("ADMIN");
        authService.isCustomer = resp.userInfo.allRoles?.includes("CUSTOMER");
        authService.isLoggedIn = true;
        // navigate to /dash
        navigate("/dash");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container m-3">
      <form onSubmit={handleSubmit}>
        <div className="card-header bg-warning text-white">
          <h3>LOGIN</h3>
        </div>
        <div className="card-body">
          <div>
            <label htmlFor="uName" className="form-label">
              User Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="uName"
              name="userName"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="uPass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="uPass"
              name="userPassword"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="card-footer bg-warning text-white">
          <button type="submit" className="btn btn-light m-3">
            Login
          </button>
          <button type="reset" className="btn btn-light m-3">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
