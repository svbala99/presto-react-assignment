import "./App.css";

import Question from "./components/Question";
import React from "react";
import Score from "./components/Score";
import Summary from "./components/Summary";

const App = () => {
  const [questions, setQuestions] = React.useState([
    {
      question: "What is 1 + 1?",
      options: [
        { id: "a", option: "2" },
        { id: "b", option: "11" },
      ],
      chosen: null,
      correctAnswer: "a",
    },
    {
      question: "What is 2 + 1?",
      options: [
        { id: "a", option: "3" },
        { id: "b", option: "11" },
      ],
      chosen: null,
      correctAnswer: "a",
    },
    {
      question: "What is 3 + 1?",
      options: [
        { id: "a", option: "4" },
        { id: "b", option: "11" },
      ],
      chosen: null,
      correctAnswer: "a",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [submitted, setSubmitted] = React.useState(false);
  const [showSummary, setShowSummary] = React.useState(false);
  const [showScore, setShowScore] = React.useState(false);

  const handleNavigation = (number = "") => {
    if (number === -1) {
      setShowSummary(true);
    } else {
      setCurrentQuestion(number);
    }
  };

  const handleOptionClick = (questionNumber, optionIdChosen) => {
    let updatedQuestions = [...questions];
    updatedQuestions[questionNumber].chosen = optionIdChosen;
    setQuestions([...updatedQuestions]);
  };

  if (submitted) {
    return <Score data={questions} />;
  }
  if (showSummary) {
    return (
      <Summary
        showScore={() => {
          setShowSummary(false);
          setShowScore(true);
        }}
        data={questions}
      />
    );
  }
  if (showScore) {
    return <Score data={questions} />;
  }
  return (
    <Question
      number={currentQuestion}
      question={questions[currentQuestion].question}
      options={questions[currentQuestion].options}
      chosen={questions[currentQuestion].chosen}
      prev={currentQuestion === 0 ? null : currentQuestion - 1}
      next={currentQuestion === questions.length - 1 ? -1 : currentQuestion + 1}
      handleNavigation={handleNavigation}
      handleOptionClick={handleOptionClick}
    />
  );
};

export default App;
