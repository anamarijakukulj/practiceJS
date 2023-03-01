import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const author = "James Clear";
const title = "Atomic Habits";
// const image = "./Images/book.jpg";
const image =
  "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY344_BO1,204,203,200_.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={image} />
      <Book author={author} title={title} img={image} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
