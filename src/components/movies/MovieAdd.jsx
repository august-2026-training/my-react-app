import React from "react";

export default function MovieAdd() {
  return (
    <div className="container">
      <form>
        <div className="card-header bg-success text-white">ADD NEW MOVIE</div>
        <div className="card-body">
          <div>
            <label for="mTitle" className="form-label">
              Movie Title
            </label>
            <input type="text" className="form-control" id="mTitle" />
          </div>
          <div>
            <label for="mDesc" className="form-label">
              Movie Description
            </label>
            <textarea className="form-control" id="mDesc"></textarea>
          </div>
          <div className="mb-3">
            <label for="mRelease" className="form-label">
              Movie Release Year
            </label>
            <select id="mRelease" className="form-control">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div>
            <label for="mImage" className="form-label">
              Movie Image URL
            </label>
            <input type="text" className="form-control" id="mImage" />
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
