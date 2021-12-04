import React from "react";
import { useHistory, Link } from "react-router-dom";

const Nav = () => {
  const task = useHistory().location.pathname;
  console.log(task);
  return (
    <nav className={`mainNav ${task === "/task4" ? "textBlack" : ""}`}>
      <Link className="link" to="/task1">
        Task 1
      </Link>
      <Link className="link" to="/task2">
        Task 2
      </Link>
      <Link className="link" to="/task3">
        Task 3
      </Link>
      <Link className="link" to="/task4">
        Task 4
      </Link>
    </nav>
  );
};

export default Nav;
