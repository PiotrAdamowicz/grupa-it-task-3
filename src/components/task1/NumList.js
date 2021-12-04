import React from "react";
import styles from "./oddEvenGenerator.module.css";

const NumList = ({ numbers, header }) => {
  return (
    <ul className={styles.list}>
      <h2 className={styles.listHeader}>{header}</h2>
      {numbers.map((num) => (
        <li className={styles.listItem}>{num}</li>
      ))}
    </ul>
  );
};

export default NumList;
