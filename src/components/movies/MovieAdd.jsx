import { useState } from "react";

export default function MovieAdd() {
  const [errors, setErrors] = useState({});
  const [newMovie, setNewMovie] = useState({
    movieId: 0,
    movieTitle: "",
    movieDescription: "",
    movieReleaseYear: "",
    movieImageUrl: "",
  });

  function handleChange(e) {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  }
  function validate() {
    // take a field and check if the input validation is violated
    if (!newMovie.movieTitle) {
      errors.movieTitle = "Movie Title is Required!";
    } else if (newMovie.movieTitle.length() < 2) {
      errors.movieTitle = "Movie Title should be atleast 2 characters!";
    }

    if (!newMovie.movieImageUrl) {
      errors.movieImageUrl = "Movie Image Url is Required!";
    }
    // if violated add it as a property in the errors object
    return errors.length == 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      // use fetch API and send form data to back end
    }
    console.log(newMovie);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="card-header bg-success text-white">ADD NEW MOVIE</div>
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
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-small">{errors.movieImageUrl}</p>
        </div>
        <div className="card-footer bg-success text-white">
          <button type="submit" className="btn btn-light m-3">
            Add Movie
          </button>
          <button type="reset" className="btn btn-light m-3">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
