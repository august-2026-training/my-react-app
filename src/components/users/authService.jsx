const authService = {
  storeJwt: (jwt) => {
    sessionStorage.setItem("jwtToken", jwt);
  },
  retrieveJwt: () => {
    return sessionStorage.getItem("jwtToken");
  },
  removeJwt: () => {
    sessionStorage.removeItem("jwtToken");
  },
  storeUser: (userInfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
  getUser: () => {
    return sessionStorage.getItem("userInfo");
  },
  removeUser: () => {
    sessionStorage.removeItem("userInfo");
  },
  isAdmin: sessionStorage.getItem("userInfo")
    ? !!JSON.parse(sessionStorage.getItem("userInfo")).allRoles?.includes(
        "ADMIN",
      )
    : null,
  isCustomer: sessionStorage.getItem("userInfo")
    ? !!JSON.parse(sessionStorage.getItem("userInfo")).allRoles?.includes(
        "CUSTOMER",
      )
    : null,
  isLoggedIn: sessionStorage.getItem("userInfo") ? true : false,
};

export default authService;
