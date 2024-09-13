import React from "react";

const Option = ({ key = "", option = "", handleClick = () => {} }) => {
  return (
    <h4
      onClick={() => handleClick(option.id)}
      key={key}
    >{`${option.id} . ${option.option}`}</h4>
  );
};
export default Option;
