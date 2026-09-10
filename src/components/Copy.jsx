import { useState } from "react";

export default function Copy() {
  const [inText, setInText] = useState("");
  return (
    <div className="container">
      <h1>This is Copy Component</h1>
      <div className="form-control-group">
        <label htmlFor="textId">Text :</label>
        <input
          type="text"
          className="form-control"
          id="textId"
          onChange={(e) => setInText(e.target.value)}
        />
      </div>
      <h4>{inText}</h4>
    </div>
  );
}
