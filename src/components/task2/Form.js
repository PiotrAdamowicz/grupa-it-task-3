import { useState, useEffect } from "react";
import styles from "./form.module.css";
import BookItem from "./BookItem";

const Form = () => {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("Literary");
  const [priorityInput, setPriorityInput] = useState("1");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("books")) {
      setBooks(JSON.parse(localStorage.getItem("books")));
      console.log(books);
    }
  }, []);

  useEffect(() => {
    if (books) {
      console.log(books);
      localStorage.removeItem("books");
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const addedBook = {
      title: e.target[0].value,
      author: e.target[1].value,
      priority: e.target[2].value,
      category: e.target[3].value,
    };

    if (books) {
      setBooks([...books, addedBook]); //updating UI state
    } else {
      setBooks([...addedBook]);
    }
    setTitleInput("");
    setAuthorInput("");
    setCategoryInput("Literary");
    setPriorityInput("1");
  };

  return (
    <form onSubmit={submitFormHandler} name="addBookForm" id="form">
      <h2 className={styles.header}>Add book to library:</h2>
      <label htmlFor="title">Title:</label>
      <input
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
        type="text"
        required
        minLength="1"
        id="title"
        name="title"
      />
      <label htmlFor="author">Author:</label>

      <input
        onChange={(e) => setAuthorInput(e.target.value)}
        value={authorInput}
        type="text"
        required
        minLength="3"
        id="author"
        name="author"
      />
      <label htmlFor="priority">Priority:</label>
      <select
        onChange={(e) => setPriorityInput(e.target.value)}
        value={priorityInput}
        name="priority"
        id="priority"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label htmlFor="categorys">Category:</label>
      <select
        onChange={(e) => setCategoryInput(e.target.value)}
        value={categoryInput}
        name="categorys"
        id="categorys"
      >
        <option value="Literary Fiction">Literary Fiction</option>
        <option value="Action and Adventure">Action and Adventure</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <button type="submit" className="btn" id="submit">
        Add Book
      </button>
      <ul className={styles.list}>
        {books
          ? books.map((book, id) => <BookItem key={id} book={book} />)
          : null}
      </ul>
    </form>
  );
};

export default Form;
