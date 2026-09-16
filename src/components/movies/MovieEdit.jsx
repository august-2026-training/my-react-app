import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import movieService from './movieService';

export default function MovieEdit() {
  const navigate = useNavigate();
  const {movId} = useParams();
  const [errors, setErrors] = useState({});
  const [updateMovie, setUpdateMovie] = useState({
    movieId: 0,
    movieTitle: "",
    movieDescription: "",
    movieReleaseYear: "",
    movieImageUrl: "",
  });

  useEffect(()=>{
    console.log(movId);
    movieService
        .getAMovie(movId)
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            setUpdateMovie(resp);
        });
  }, []);

  function handleChange(e) {
    setUpdateMovie({
      ...updateMovie,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  }
  function validate() {
    let newErrors = {};
    if (!updateMovie.movieTitle) {
      newErrors.movieTitle = "Movie Title is Required!";
    } else if (updateMovie.movieTitle.length < 2) {
      newErrors.movieTitle = "Movie Title should be atleast 2 characters!";
    }

    if (!updateMovie.movieImageUrl) {
      newErrors.movieImageUrl = "Movie Image Url is Required!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      // use fetch API and send form data to back end
      movieService
        .updateMovie(updateMovie)
        .then((response)=>{
        if (!response.ok) {
          throw new Error("Error is receiving response!");
        }
        return response.json();
      })
        .then((resp)=> {
          console.log(resp);
          navigate("/movies/list");
        })
        .catch((error)=>console.log(error));
    }
    console.log(updateMovie);
  }
  return (
    <div className="container m-3">
      <form onSubmit={handleSubmit}>
        <div className="card-header bg-primary text-white"><h3>EDIT MOVIE</h3></div>
        <div className="card-body">
          <div>
            <label htmlFor="mTitle" className="form-label">
              Movie Title
            </label>
            <input
              type="text"
              className="form-control"
              id="mTitle"
              name="movieTitle"
              value={updateMovie.movieTitle}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-small">{errors.movieTitle}</p>
          <div>
            <label htmlFor="mDesc" className="form-label">
              Movie Description
            </label>
            <textarea
              className="form-control"
              id="mDesc"
              name="movieDescription"
              value={updateMovie.movieDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="mRelease" className="form-label">
              Movie Release Year
            </label>
            <select
              id="mRelease"
              className="form-control"
              name="movieReleaseYear"
              value="updateMovie.movieReleaseYear"
              onChange={handleChange}
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div>
            <label htmlFor="mImage" className="form-label">
              Movie Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="mImage"
              name="movieImageUrl"
              value={updateMovie.movieImageUrl}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-small">{errors.movieImageUrl}</p>
        </div>
        <div className="card-footer bg-primary text-white">
          <button type="submit" className="btn btn-light m-3">
            Update Movie
          </button>
          <button type="reset" className="btn btn-light m-3">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
