import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY344_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: "Alex North ",
    title: "The Half Burnt House:",
    img: "https://m.media-amazon.com/images/I/51GCvvcZeOL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
