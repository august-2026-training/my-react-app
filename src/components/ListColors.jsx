import { useState } from "react";

export default function ListColors() {
  const [allColors, setAllColors] = useState(["RED", "BLUE", "GREEN"]);

  return (
    <>
      <h1>This is a List Color Component</h1>
      <ul className="list-group">
        {allColors.map((eachColor) => (
          <li className="list-group-item">{eachColor}</li>
        ))}
      </ul>
    </>
  );
}
