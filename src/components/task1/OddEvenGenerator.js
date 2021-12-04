import { useState } from "react";
import Button from "../Button";
import styles from "./oddEvenGenerator.module.css";
import NumList from "./NumList";

const getComputedColumn = (arr, type) => {
  const even = [];
  const odd = [];
  arr.map((num) => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  if (type === "odd") {
    return odd.sort((a, b) => a > b);
  }
  if (type === "even") {
    return even.sort((a, b) => a > b);
  }
};

const OddEvenGenerator = () => {
  //   const [numbers, setNumbers] = useState();
  const [odd, setOdd] = useState();
  const [even, setEven] = useState();

  const generateNumbers = () => {
    const numbers = [...Array(20)].map(() => Math.floor(Math.random() * 100));
    setOdd(getComputedColumn(numbers, "odd"));
    setEven(getComputedColumn(numbers, "even"));
  };
  return (
    <section className={styles.taskWrapper}>
      <Button click={generateNumbers}>Click Me</Button>
      <div className={styles.container}>
        {odd ? <NumList header="Odd" numbers={odd} /> : null}
        {even ? <NumList header="Even" numbers={even} /> : null}
      </div>
    </section>
  );
};

export default OddEvenGenerator;
