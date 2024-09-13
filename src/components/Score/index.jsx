import React from "react";

const Score = ({ data }) => {
  return (
    <div>
      {data.map((i, index) => {
        return (
          <div key={i?.question}>
            <h2>{`${index + 1}. ${i?.question}`}</h2>
            <span>
              {`Answer chosen: ${i?.chosen || ""} . ${
                i?.options?.find((j) => j.id === i?.chosen)?.option ||
                "Not answered"
              }`}
              {` ===> ${
                i?.chosen === i?.correctAnswer ? "Right Answer" : "Wrong answer"
              }`}
            </span>
          </div>
        );
      })}
      <h3>
        Score: {data?.filter((i) => i.chosen === i?.correctAnswer)?.length}/
        {data?.length}
      </h3>
    </div>
  );
};
export default Score;
