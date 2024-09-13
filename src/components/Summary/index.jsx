import React from "react";

const Summary = ({ data, showScore = () => {} }) => {
  const isAllQuestionsAnswered = data.every(
    (question) => question.chosen !== null
  );
  return (
    <div>
      {data.map((i, index) => {
        return (
          <div key={i?.question}>
            <h2>{`${index + 1}. ${i?.question}`}</h2>
            <span>{`Answer chosen: ${i?.chosen || ""} . ${
              i?.options?.find((j) => j.id === i?.chosen)?.option ||
              "Not answered"
            }`}</span>
          </div>
        );
      })}
      <br />
      {!isAllQuestionsAnswered && (
        <span>Kindly answer all questions to submit</span>
      )}
      <br />
      <button onClick={showScore} disabled={!isAllQuestionsAnswered}>
        Submit
      </button>
    </div>
  );
};
export default Summary;
