import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import movieService from "./movieService.jsx";

export default function MovieList() {
  const navigate = useNavigate();
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    loadMovie();
  }, []);

  function loadMovie() {
    movieService
      .getAllMovies()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error is receiving response!");
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setAllMovies(responseJson);
      })
      .catch((err) => console.log(err));
  }
  function editMovie(movId) {
    navigate(`/dash/movies/edit/${movId}`);
  }

  function deleteMovie(movId) {
    movieService.deleteMovie(movId).then(() => loadMovie());
  }

  return (
    <div className="container">
      <div className="row">
        {allMovies.map((eachMovie) => (
          <div className="col-3 m-2" key={eachMovie.movieId} height="700px">
            <img
              className="card-img-top"
              src={eachMovie.movieImageUrl}
              width="100%"
              height="200px"
            />
            <div className="card-body">
              <h4 className="card-title">{eachMovie.movieTitle}</h4>
              <p className="card-text">{eachMovie.movieDescription}</p>
              <button
                className="btn btn-primary"
                onClick={() => editMovie(eachMovie.movieId)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteMovie(eachMovie.movieId)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
