import React from "react";

// export default function FruitItem(props) {
export default function FruitItem({ fId, fName, fIcon }) {
  //console.log(props);
  return (
    <>
      <li className="list-group-item">
        {/* {props.fId} - {props.fName} - {props.fIcon} */}
        {fId} - {fName} - {fIcon}
      </li>
    </>
  );
}
