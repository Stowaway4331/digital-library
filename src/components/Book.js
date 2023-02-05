import React from "react";
import Title from "./Title";
import Image from "./Image";
import Author from "./Author";

const Book = ({ img, title, author, price, desc }) => {
  // const { img, title, author, price, desc } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Added to cart");
  };

  const showImage = (img) => {
    window.open(img, "_blank");
  };

  return (
    <article
      className="book"
      onMouseEnter={(e) => {
        console.log(
          "Mouse entered: ",
          e.target.getElementsByClassName("title")[0].innerHTML
        );
      }}
    >
      <div onClick={() => showImage(img)}>
        <Image img={img} /*onClick={() => showImage(img)}*/ />
      </div>
      <Title title={title} />
      <Author author={author} />
      <p className="book-price" style={{ fontSize: "1.5rem" }}>
        ₹{price}
      </p>
      <p className="book-desc">{desc}</p>
      <button type="button" onClick={clickHandler} className="book-button">
        Add to Cart
      </button>
    </article>
  );
};

export default Book;
