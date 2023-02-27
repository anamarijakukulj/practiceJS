import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// function Greetings() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// function Greetings() {
//   return React.createElement("h2", {}, "hello world");
// }

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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51B7kuFwQFL._SY344_BO1,204,203,200_.jpg"
    alt="Atomic Habits"
  />
);
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
