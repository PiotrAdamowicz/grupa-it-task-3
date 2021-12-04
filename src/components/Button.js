import React from "react";

const Button = ({ click, children }) => {
  return (
    <button onClick={click} className="btn">
      {children}
    </button>
  );
};
export default Button;
