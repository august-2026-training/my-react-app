const baseUrl = "http://localhost:3434/api/users";

const userService = {
  login: (loginFormData) => {
    return fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    });
  },
  register: (registerFormaData) => {
    // consume register endpoint
  },
};

export default userService;
