import React from "react";

export default function Question(props) {
  // props.answers.map((answer) => console.log(answer.text));
  return (
    <div>
      <p>{props.question}</p>
      <div>
        {props.answers.map((answer) => (
          <p onClick={props.handleClick}>{answer.text}</p>
        ))}
      </div>
    </div>
  );
}
