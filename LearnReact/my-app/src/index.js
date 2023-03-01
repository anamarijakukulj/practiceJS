import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY344_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Alex North ",
  title: "The Half Burnt House:",
  img: "https://m.media-amazon.com/images/I/51GCvvcZeOL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          nostrum adipisci modi eaque sunt officiis, reiciendis fuga maxime eum
          asperiores.
        </p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      ></Book>
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
