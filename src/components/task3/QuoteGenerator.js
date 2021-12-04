import { useEffect, useState } from "react";
import Quote from "./Quote";
import Button from "../Button";

const randomIndex = (arr) => {
  //Returns random index from 0 to max length of given array
  return Math.floor(Math.random() * arr.length);
};

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [history, setHistory] = useState([]);
  const [quoteId, setQuoteId] = useState(0);

  useEffect(() => {
    //data fetching
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuotes([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setQuoteId(randomIndex(quotes));
  }, []);

  const randomQuoteHandler = () => {
    const index = randomIndex(quotes);
    setQuoteId(index);
    setHistory([...history, index]);
    console.log(history);
  };
  const prevQuoteHandler = () => {
    setQuoteId(history[history.length - 2]);
    // const updatedHistory = ;
    setHistory([...history].slice(0, -1));
  };
  return (
    <section className="container">
      <nav>
        <Button click={prevQuoteHandler}>Prev Quote</Button>
        <Button click={randomQuoteHandler}>Get Random Quote</Button>
      </nav>
      {quoteId ? (
        <>
          <Quote
            quote={quotes[quoteId].quote}
            author={quotes[quoteId].author}
          />
        </>
      ) : (
        <h1 className="title">Generate random Quote</h1>
      )}
    </section>
  );
};

export default QuoteGenerator;
