import { useState } from "react";

export default function Toggle() {
  const [bookName, setBookName] = useState(
    "Harry Potter and the Chamber of Secrets",
  );

  const [flag, setFlag] = useState(true);

  function toggleBook() {
    setFlag(!flag);
  }
  return (
    <>
      <h1>This is Toggle Component</h1>
      <button className="btn btn-warning" onClick={toggleBook}>
        Click to Toggle
      </button>
      <h4>{flag && bookName}</h4>
    </>
  );
}
