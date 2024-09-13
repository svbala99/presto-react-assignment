import Option from "../Option";
import React from "react";

const Question = ({
  key = "",
  number = 0,
  question = "",
  options = null,
  prev = "",
  next = "",
  handleNavigation = () => {},
  handleOptionClick = () => {},
}) => {
  return (
    <div key={key || "123"}>
      {question?.length > 0 && <h2>{`${number + 1}. ${question}`}</h2>}
      {options &&
        options?.map((option) => {
          return (
            <Option
              key={option.id}
              option={option}
              handleClick={(optionId) => {
                handleOptionClick(number, optionId);
              }}
            />
          );
        })}
      <button
        disabled={prev === null}
        className="btn"
        onClick={() => {
          handleNavigation(prev);
        }}
      >
        <span>Previous</span>
      </button>
      <button
        disabled={next === null}
        className="btn"
        style={{ marginLeft: 16 }}
        onClick={() => {
          handleNavigation(next);
        }}
      >
        <span>Next</span>
      </button>
    </div>
  );
};
export default Question;
