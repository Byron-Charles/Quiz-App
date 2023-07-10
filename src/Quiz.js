import React from "react";
// import Answer from "./Answer";
import Question from "./Question";
export default function Quiz() {
  const [allQuestions, setAllQuestions] = React.useState([]);

  function getRandomArray(arr, item) {
    const randomNumber = Math.floor(Math.random() * 4);
    const correctAnswer = {
      text: item,
      isCorrect: true,
      isHeld: false,
    };

    arr.splice(randomNumber, 0, correctAnswer);
    return arr;
  }

  function checkAnswer(e, question) {
    const right = question.filter((question) => question.isCorrect);

    console.log(right[0].text);

    if (e.target.textContent === right[0].text) {
      console.log("CORRECT");
    } else {
      console.log("INCORRECT");
    }

    // for (let i = 0; i < question.length; i++) {
    //   if (
    //     e.target.textContent === question[i].text &&
    //     question[i].isCorrect === true
    //   ) {
    //     console.log("CORRECT!");
    //     question[i].isHeld = true;
    //   } else {
    //     console.log("INCORRECT");
    //     question[i].isHeld = true;
    //   }
    // }
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setAllQuestions(data.results));
  }, []);

  allQuestions.map((question) => console.log(question.question));

  const questionEls = allQuestions.map((question) => {
    console.log(question.correct_answer);

    const correctAnswer = question.correct_answer;

    const incorrectAnswers = question.incorrect_answers.map((question) => ({
      text: question,
      isCorrect: false,
      isHeld: false,
    }));

    const allAnswers = getRandomArray(incorrectAnswers, correctAnswer);
    console.log(allAnswers);
    return (
      <Question
        question={question.question}
        answers={allAnswers}
        handleClick={(e) => checkAnswer(e, allAnswers)}
      />
    );
  });

  return <div>{questionEls}</div>;
}

//   const questionEls = allQuestions.map((question) => {
//     return <p>{question.question}</p>;
//   });

//   return <div>{questionEls}</div>;
