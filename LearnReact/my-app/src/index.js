import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const author = "James Clear";
const title = "Atomic Habits";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/51B7kuFwQFL._SY344_BO1,204,203,200_.jpg"
        alt="Atomic Habits"
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
