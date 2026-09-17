const baseUrl = "http://localhost:3434/api/movies";
const jwtToken = sessionStorage.getItem("jwtToken");
const movieService = {
  getAllMovies: () => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    });
  },
  getAMovie: (movieId) => {
    return fetch(`${baseUrl}/${movieId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    });
  },
  addMovie: (newMovie) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });
  },
  updateMovie: (editMovie) => {
    return fetch(baseUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editMovie),
    });
  },
  deleteMovie: (movieId) => {
    return fetch(`${baseUrl}/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    });
  },
};

export default movieService;
