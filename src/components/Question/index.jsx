import React from "react";

const Question = ({
  number = 0,
  question = "",
  options = null,
  prev = "",
  next = "",
  chosen = "",
  handleNavigation = () => {},
  handleOptionClick = () => {},
}) => {
  return (
    <div key={question}>
      {question?.length > 0 && <h2>{`${number + 1}. ${question}`}</h2>}
      {options &&
        options?.map((option) => {
          return (
            <section key={option?.id}>
              <label>
                <input
                  id={option?.id}
                  type="radio"
                  value={option?.option}
                  checked={option?.id === chosen}
                  onChange={() => {
                    handleOptionClick(number, option?.id);
                  }}
                />
                {option?.option}
              </label>
              <br />
            </section>
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
        disabled={next === null || chosen === null}
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
