const baseUrl = "http://localhost:3434/api/movies";
const jwtToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc4OTU1MzkwOSwiZXhwIjoxNzg5NjQwMzA5fQ.v0p8wRIRDlCqfxa81WbQv9DT4FnY2ofpkDhPpJaMJeo";

const movieService = {
  getAllMovies: () => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': "application/json",
      },
    });
  },
  getAMovie: (movieId) => {
    return fetch(`${baseUrl}/${movieId}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': "application/json",
      },
    });
  },
  addMovie: (newMovie) => {
    return fetch(baseUrl,
      {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newMovie)})
  },
  updateMovie: (editMovie) => {
    return fetch(baseUrl,
      {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify(editMovie)})
  },
  deleteMovie: (movieId) => {
    return fetch(`${baseUrl}/${movieId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': "application/json",
      },
    });
  },
};

export default movieService;
