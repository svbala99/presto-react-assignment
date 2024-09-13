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
    if (questionNumber < questions.length - 1) {
      setCurrentQuestion(questionNumber + 1);
    }
  };

  if (submitted) {
    return <Score data={questions} />;
  }
  if (showSummary) {
    return <Summary handleNavigation={handleNavigation} data={questions} />;
  }
  return (
    <Question
      key={currentQuestion}
      number={currentQuestion}
      question={questions[currentQuestion].question}
      options={questions[currentQuestion].options}
      prev={currentQuestion === 0 ? null : currentQuestion - 1}
      next={currentQuestion === questions.length - 1 ? -1 : currentQuestion + 1}
      handleNavigation={handleNavigation}
      handleOptionClick={handleOptionClick}
    />
  );
};

export default App;
