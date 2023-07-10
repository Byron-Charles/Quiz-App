import React from "react";

export default function Home(props) {
  return (
    <div className="home-div">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="start-btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
