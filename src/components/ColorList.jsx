import { useState } from "react";

export default function ColorList() {
  const [allColors, setAllColors] = useState(["RED", "BLUE", "GREEN"]);
  const [newColor, setNewColor] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // let copyAllColors = [...allColors, newColor];
    // setAllColors(copyAllColors);
    setAllColors([...allColors, newColor]);
    setNewColor("");
  }
  return (
    <div className="container">
      <h1>This is a List Color Component</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control-group">
          <label htmlFor="textId">Text :</label>
          <input
            type="text"
            className="form-control"
            id="textId"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            ADD COLOR
          </button>
        </div>
      </form>
      <ul className="list-group">
        {allColors.map((eachColor, index) => (
          <li key={index} className="list-group-item">
            {eachColor}
          </li>
        ))}
      </ul>
    </div>
  );
}
