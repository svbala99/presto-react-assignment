import React from "react";

const Summary = ({ data, handleNavigation = () => {} }) => {
  return (
    <div>
      {data.map((i, index) => {
        return (
          <div key={i}>
            <h2>{`${index + 1}. ${i?.question}`}</h2>
            <h2>{`Answer chosen: ${i?.chosen} . ${
              i?.options?.find((j) => j.id === i?.chosen)?.option ||
              "Not chosen"
            }`}</h2>
          </div>
        );
      })}
      <button>Submit</button>
    </div>
  );
};
export default Summary;
