import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <h3 className="quote">{quote}</h3>
      <p>- {author}</p>
    </div>
  );
};
export default Quote;
