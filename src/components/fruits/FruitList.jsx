import { useState } from "react";
import FruitItem from "./FruitItem.jsx";

export default function FruitList() {
  const [allFruits, setAllFruits] = useState([
    {
      fruitId: 1,
      fruitName: "Orange",
      fruitIcon: "🍊",
    },
    {
      fruitId: 2,
      fruitName: "Apple",
      fruitIcon: "🍎",
    },
    {
      fruitId: 3,
      fruitName: "Banana",
      fruitIcon: "🍌",
    },
  ]);
  return (
    <div className="container">
      <h3>LIST OF FRUITS</h3>
      <ul className="list-group">
        {allFruits.map((eachFruit) => (
          <FruitItem
            key={eachFruit.fruitId}
            fId={eachFruit.fruitId}
            fName={eachFruit.fruitName}
            fIcon={eachFruit.fruitIcon}
          />
        ))}
      </ul>
    </div>
  );
}
