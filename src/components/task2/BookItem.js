import React from "react";
import styles from "./form.module.css";

const BookItem = ({ book }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.title}>
        <span>Title:</span>
        <span className={styles.data}>{book.title}</span>
      </div>
      <div className={styles.author}>
        <span>Author:</span>
        <span className={styles.data}>{book.author}</span>
      </div>
      <div className={styles.priority}>
        <span>Priority:</span>
        <span className={styles.data}>{book.priority}</span>
      </div>
      <div className={styles.category}>
        <span>Category:</span>
        <span className={styles.data}>{book.category}</span>
      </div>
    </li>
  );
};

export default BookItem;
