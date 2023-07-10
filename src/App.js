import React from "react";
import Home from "./Home";
import Blob from "./Blob";
import Quiz from "./Quiz";
export default function App() {
  const [start, setStart] = React.useState(false);
  function startGame() {
    setStart((start) => !start);
  }

  return (
    <div className="container">
      <Blob />
      {!start && <Home handleClick={startGame} />}
      {start && <Quiz />}
    </div>
  );
}
