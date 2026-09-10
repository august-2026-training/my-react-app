import { useState } from "react";

export default function MovieAdd() {
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

  function handleSubmit(e) {
    e.preventDefault();
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
