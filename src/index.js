import React from "react";
// import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./components/App";

/* Book Component */

// const Book = ({ img, title, author, price, desc }) => {
//   // const { img, title, author, price, desc } = props;

//   const clickHandler = (e) => {
//     console.log(e);
//     console.log(e.target);
//     alert("Added to cart");
//   };

//   const showImage = (img) => {
//     window.open(img, "_blank");
//   };

//   return (
//     <article
//       className="book"
//       onMouseEnter={(e) => {
//         console.log(
//           "Mouse entered: ",
//           e.target.getElementsByClassName("title")[0].innerHTML
//         );
//       }}
//     >
//       <div onClick={() => showImage(img)}>
//         <Image img={img} /*onClick={() => showImage(img)}*/ />
//       </div>
//       <Title title={title} />
//       <Author author={author} />
//       <p className="book-price" style={{ fontSize: "1.5rem" }}>
//         ₹{price}
//       </p>
//       <p className="book-desc">{desc}</p>
//       <button type="button" onClick={clickHandler} className="book-button">
//         Add to Cart
//       </button>
//     </article>
//   );
// };

/** one way of using maps to iterate through an array/list/etc. */

// const booksMap = books.map((book) => {
//   const { img, title, author, price, desc } = book;
//   return (
//     <Book img={img} title={title} author={author} price={price} desc={desc} />
//   );
// });

// const BookList = () => {
//   return (
//     <>
//       <Header />
//       <section className="book-list">
//         {books.map((book) => {
//           return <Book {...book} />;
//         })}
//       </section>
//     </>
//   );
// };

/* Imagge Component */

// const Image = ({ img }) => (
//   <img className="image" src={img} alt="book img not found" />
// );

/* Title Component */

// const Title = ({ title }) => <h3 className="title">{title}</h3>;

/* Author Component */

// const Author = ({ author }) => (
//   <h4 className="author" style={{ fontSize: "0.85rem" }}>
//     {author.toUpperCase()}
//   </h4>
// );

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
// ReactDOM.render(<Master />, document.getElementById("root"));
